package today.wtfood.server.security.handler;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import today.wtfood.server.entity.Member;
import today.wtfood.server.security.JwtTokenProvider;
import today.wtfood.server.security.dto.JwtAuthResponse;
import today.wtfood.server.util.ResponseHelper;

import java.io.IOException;

/**
 * {@code /auth/login} 요청을 통한 인증 성공 시 호출
 */
@Log4j2
@Component
public class AuthenticationSuccessHandlerImpl implements AuthenticationSuccessHandler {

    private final JwtTokenProvider jwtTokenProvider;

    public AuthenticationSuccessHandlerImpl(JwtTokenProvider jwtTokenProvider) {
        this.jwtTokenProvider = jwtTokenProvider;
    }

    @Override
    public void onAuthenticationSuccess(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication
    ) throws IOException {
        // 사용자 정보 가져오기
        Member member = (Member) authentication.getPrincipal();

        // JWT 토큰 생성
        JwtAuthResponse jwtAuthResponse = jwtTokenProvider.generateToken(member.getUsername());

        ResponseHelper.write(response, ResponseEntity.ok(jwtAuthResponse));
    }

}