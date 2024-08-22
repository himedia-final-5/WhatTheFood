package today.wtfood.server.security.handler;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;
import org.springframework.stereotype.Component;
import today.wtfood.server.exception.GlobalExceptionHandler;
import today.wtfood.server.util.ResponseHelper;

import java.io.IOException;

/**
 * 리소스에 접근하는 과정에서 발생하는 예외를 처리
 */
@Log4j2
@Component
public class AccessExceptionHandler implements AccessDeniedHandler, AuthenticationEntryPoint {

    /**
     * 인증된 사용자가 권한이 없는 리소스에 접근하려고 할 때 호출
     */
    @Override
    public void handle(
            HttpServletRequest request,
            HttpServletResponse response,
            AccessDeniedException exception
    ) throws IOException {
        log.error("Access Denied : {}", exception.getMessage());

        ResponseHelper.write(response, GlobalExceptionHandler.createResponseEntity(HttpStatus.FORBIDDEN, "권한이 없습니다"));
    }

    /**
     * 인증되지 않은 사용자가 보호된 리소스에 접근하려고 할 때 호출
     */
    public void commence(
            HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException exception
    ) throws IOException {
        log.error("Authentication Failed : {}", exception.getMessage());

        ResponseHelper.write(response, GlobalExceptionHandler.createResponseEntity(HttpStatus.UNAUTHORIZED, "인증이 필요합니다"));
    }

}