package today.wtfood.server.security.handler;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;
import today.wtfood.server.util.ResponseHelper;

import java.io.IOException;

/**
 * 인증되지 않은 사용자가 보호된 리소스에 접근하려고 할 때 호출
 */
@Log4j2
@Component
public class AuthenticationEntryPointImpl implements AuthenticationEntryPoint {

    public void commence(
            HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException exception
    ) throws IOException {
        log.error("Authentication Failed : {}", exception.getMessage());

        ResponseHelper.writeError(response, HttpStatus.UNAUTHORIZED, "Request is not authorized");
    }

}