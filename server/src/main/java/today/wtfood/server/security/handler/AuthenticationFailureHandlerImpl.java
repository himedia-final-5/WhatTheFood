package today.wtfood.server.security.handler;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;
import today.wtfood.server.util.ResponseHelper;

import java.io.IOException;

/**
 * {@code /auth/signin} 요청을 통한 인증 실패 시 호출
 */
@Log4j2
@Component
public class AuthenticationFailureHandlerImpl implements AuthenticationFailureHandler {

    @Override
    public void onAuthenticationFailure(
            HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException exception
    ) throws IOException {
        log.error("Authentication Failed : {}", exception.getMessage());

        ResponseHelper.writeError(response, HttpStatus.UNAUTHORIZED, "Authentication failed");
    }

}