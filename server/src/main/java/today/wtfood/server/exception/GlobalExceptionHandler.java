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

    @ExceptionHandler(JwtException.class)
    public void handleJwtException(JwtException exception, HttpServletResponse response) throws IOException {
        log.error("JWT Exception: ", exception);

        ResponseHelper.writeError(response, HttpStatus.UNAUTHORIZED, exception.getMessage());
    }

    @ExceptionHandler(RuntimeException.class)
    public void handleRuntimeException(RuntimeException exception, HttpServletResponse response) throws IOException {
        log.error("RuntimeException: ", exception);

        ResponseHelper.writeError(response, HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage());
    }

    @ExceptionHandler(IllegalArgumentException.class)
    public void handleIllegalArgumentException(IllegalArgumentException exception, HttpServletResponse response) throws IOException {
        log.error("IllegalArgumentException: ", exception);

        ResponseHelper.writeError(response, HttpStatus.BAD_REQUEST, exception.getMessage());
    }

    @ExceptionHandler(ResponseStatusException.class)
    public void handleResponseStatusException(ResponseStatusException exception, HttpServletResponse response) throws IOException {
        log.error("ResponseStatusException: {}", exception.getReason());

        String errorMessage = exception.getReason() == null ? exception.getMessage() : exception.getReason();
        ResponseHelper.writeError(response, exception.getStatusCode(), errorMessage);
    }

}