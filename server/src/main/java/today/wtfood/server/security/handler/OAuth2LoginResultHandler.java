package today.wtfood.server.security.handler;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;

import java.io.IOException;

/**
 * {@code /oauth2/authorization} 요청을 통한 인증 결과 처리
 */
@Log4j2
@Component
public class OAuth2LoginResultHandler implements AuthenticationSuccessHandler, AuthenticationFailureHandler {

    @Override
    public void onAuthenticationSuccess(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication
    ) throws IOException {
        log.info("OAuth2 login success: {}", authentication);
        response.sendRedirect("http://wtfood.today:3000/");
        // TODO: 로그인 성공 후 처리
    }

    @Override
    public void onAuthenticationFailure(
            HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException exception
    ) throws IOException {
        log.error("OAuth2 login failed: ", exception);
        response.sendRedirect("http://wtfood.today:3000/");
        // TODO: 로그인 실패 후 처리
    }

}