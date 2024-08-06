package today.wtfood.server.exception;

import io.jsonwebtoken.JwtException;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.server.ResponseStatusException;
import today.wtfood.server.util.ResponseHelper;

import java.io.IOException;

@Log4j2
@ControllerAdvice
public class GlobalExceptionHandler {

    /**
     * @implNote JWT 토큰을 처리하는 과정에서 발생하는 예외
     */
    @ExceptionHandler(JwtException.class)
    public void handleJwtException(JwtException exception, HttpServletResponse response) throws IOException {
        log.error("JWT Exception: ", exception);

        ResponseHelper.writeError(response, HttpStatus.UNAUTHORIZED, exception.getMessage());
    }

    /**
     * @implNote 메서드 인자로 전달된 값이 잘못된 경우 발생하는 예외
     */
    @ExceptionHandler(IllegalArgumentException.class)
    public void handleIllegalArgumentException(IllegalArgumentException exception, HttpServletResponse response) throws IOException {
        log.error("IllegalArgumentException: ", exception);

        ResponseHelper.writeError(response, HttpStatus.BAD_REQUEST, exception.getMessage());
    }

    /**
     * @implNote {@link ResponseStatusException} 예외를 처리하는 핸들러 메소드
     */
    @ExceptionHandler(ResponseStatusException.class)
    public void handleResponseStatusException(ResponseStatusException exception, HttpServletResponse response) throws IOException {
        log.error("ResponseStatusException: {}", exception.getReason());

        String errorMessage = exception.getReason() == null ? exception.getMessage() : exception.getReason();
        ResponseHelper.writeError(response, exception.getStatusCode(), errorMessage);
    }

    /**
     * @implNote 위 핸들러에서 처리되지 않은 모든 예외
     */
    @ExceptionHandler(Exception.class)
    public void handleException(Exception exception, HttpServletResponse response) throws IOException {
        log.error("Exception: ", exception);

        ResponseHelper.writeError(response, HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage());
    }

}