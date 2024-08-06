package today.wtfood.server.security.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.server.ResponseStatusException;
import today.wtfood.server.entity.Member;
import today.wtfood.server.exception.GlobalExceptionHandler;
import today.wtfood.server.security.service.JwtService;

import java.io.IOException;
import java.util.List;

@Log4j2
@Component
@RequiredArgsConstructor
public class JwtAuthenticationFilter extends OncePerRequestFilter {

    private final JwtService jwtService;
    private final UserDetailsService userDetailsService;
    private final GlobalExceptionHandler globalExceptionHandler;

    private final AntPathMatcher pathMatcher = new AntPathMatcher();
    private static final List<String> WHITE_LIST = List.of(
            // 정적 리소스
            "/static/**",

            // 공개 api
            "/error",

            // 인증 API
            "/auth/login",
            "/auth/reissue/**",

            // 회원 API
            "/members",
            "/members/*",

            // 레시피 API
            "/recipes",
            "/recipes/*",

            // 공지사항 API
            "/notices",
            "/notices/*",

            // 이벤트 API
            "/events",
            "/events/*",

            // 문의 API
            "/inquiries",
            "/inquiries/*"
    );

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws IOException, ServletException {
        try {
            String accessToken = jwtService.resolveAccessToken(request);

            Claims claims = jwtService.validateToken(accessToken);
            Member member = (Member) userDetailsService.loadUserByUsername(claims.getSubject());

            // 인증 객체 생성 후 SecurityContext 에 저장
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                    member,
                    member.getPassword(),
                    member.getAuthorities()
            );
            SecurityContext context = SecurityContextHolder.createEmptyContext();
            context.setAuthentication(authenticationToken);
            SecurityContextHolder.setContext(context);

            // 다음 필터로 이동
            filterChain.doFilter(request, response);
        } catch (JwtException jwtException) {
            globalExceptionHandler.handleJwtException(jwtException, response);
        } catch (ResponseStatusException responseStatusException) {
            globalExceptionHandler.handleResponseStatusException(responseStatusException, response);
        }
    }

    @Override
    protected boolean shouldNotFilter(HttpServletRequest request) {
        if (request.getMethod().equals("OPTIONS")) return true;

        String path = request.getRequestURI();
        log.info("Request Path: '{}'", path);
        return WHITE_LIST.stream().anyMatch(pattern -> pathMatcher.match(pattern, path));
    }

}
