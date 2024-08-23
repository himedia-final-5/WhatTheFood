package today.wtfood.server.security.handler;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import today.wtfood.server.entity.member.Member;
import today.wtfood.server.security.enums.TokenPurpose;
import today.wtfood.server.security.service.JwtService;

import java.io.IOException;

/**
 * {@code /oauth2/authorization} 요청을 통한 인증 결과 처리
 */
@Log4j2
@Component
public class OAuth2LoginResultHandler implements AuthenticationSuccessHandler, AuthenticationFailureHandler {

    private final JwtService jwtService;
    private final String responseUri;

    public OAuth2LoginResultHandler(
            @Value("${oauth2.global.response-uri}")
            String responseUri,
            JwtService jwtService
    ) {
        this.responseUri = responseUri;
        this.jwtService = jwtService;
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
        String refreshToken = jwtService.generateToken(TokenPurpose.REFRESH_TOKEN, member.getUsername(), 1000 * 60 * 5, null);

        response.sendRedirect(responseUri + "?code=" + refreshToken);
    }

    @Override
    public void onAuthenticationFailure(
            HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException exception
    ) throws IOException {
        log.error("OAuth2 Login Failed : {}", exception.getMessage());

        response.sendRedirect(responseUri + "?error");
    }

}
