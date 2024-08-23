package today.wtfood.server.security.filter;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import jakarta.servlet.FilterChain;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.lang.NonNull;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Component;
import org.springframework.util.AntPathMatcher;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.server.ResponseStatusException;
import today.wtfood.server.dto.member.MemberPrincipal;
import today.wtfood.server.entity.member.Member;
import today.wtfood.server.exception.GlobalExceptionHandler;
import today.wtfood.server.security.enums.TokenPurpose;
import today.wtfood.server.security.service.JwtService;
import today.wtfood.server.util.ResponseHelper;

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
            "/auth/**",
            "/login/**",
            "/logout/**"
    );

    @Override
    protected void doFilterInternal(
            @NonNull HttpServletRequest request,
            @NonNull HttpServletResponse response,
            @NonNull FilterChain filterChain
    ) throws IOException {
        try {
            String authorizationHeader = request.getHeader("Authorization");

            // 인증 헤더가 없는 경우 다음 필터로 이동
            if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
                filterChain.doFilter(request, response);
                return;
            }
            String accessToken = authorizationHeader.substring(7);

            Claims claims = jwtService.validateToken(accessToken, TokenPurpose.AUTHORIZATION);
            String username = claims.getSubject();
            Member member = (Member) userDetailsService.loadUserByUsername(username);

            // 인증 객체 생성 후 SecurityContext 에 저장
            UsernamePasswordAuthenticationToken authenticationToken = new UsernamePasswordAuthenticationToken(
                    new MemberPrincipal(member),
                    member.getPassword(),
                    member.getAuthorities()
            );
            SecurityContext context = SecurityContextHolder.createEmptyContext();
            context.setAuthentication(authenticationToken);
            SecurityContextHolder.setContext(context);

            // 다음 필터로 이동
            filterChain.doFilter(request, response);
        } catch (JwtException jwtException) {
            ResponseHelper.write(response, globalExceptionHandler.handleJwtException(jwtException));
        } catch (ResponseStatusException responseStatusException) {
            ResponseHelper.write(response, globalExceptionHandler.handleResponseStatusException(responseStatusException));
        } catch (UsernameNotFoundException usernameNotFoundException) {
            ResponseHelper.write(response, globalExceptionHandler.handleUsernameNotFoundException(usernameNotFoundException));
        } catch (Exception exception) {
            ResponseHelper.write(response, globalExceptionHandler.handleException(exception));
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
