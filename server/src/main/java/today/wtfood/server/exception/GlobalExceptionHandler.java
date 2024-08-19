package today.wtfood.server.exception;

import io.jsonwebtoken.JwtException;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.security.authorization.AuthorizationDeniedException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.resource.NoResourceFoundException;
import today.wtfood.server.util.ResponseHelper;

import java.io.IOException;
import java.util.Objects;

@Log4j2
@ControllerAdvice
public class GlobalExceptionHandler {

    /**
     * @implNote JWT 토큰을 처리하는 과정에서 발생하는 예외
     */
    @ExceptionHandler(JwtException.class)
    public void handleJwtException(JwtException exception, HttpServletResponse response) throws IOException {
        log.error("JWT Exception: ", exception);

        ResponseHelper.writeError(response, HttpStatus.UNAUTHORIZED, "잘못된 토큰입니다");
    }

    /**
     * @implNote 권한이 없는 사용자가 접근하려고 할 때 발생하는 예외
     */
    @ExceptionHandler(AuthorizationDeniedException.class)
    public void handleAuthorizationDeniedException(AuthorizationDeniedException exception, HttpServletResponse response) throws IOException {
        log.error("AuthorizationDeniedException: ", exception);

        ResponseHelper.writeError(response, HttpStatus.FORBIDDEN, "권한이 없습니다");
    }

    /**
     * @implNote 스프링에서 {@link RequestParam} 어노테이션으로 요구된 파라미터가 요청에 포함되지 않았을 경우에 발생하는 예외
     */
    @ExceptionHandler(MissingServletRequestParameterException.class)
    public void handleMissingServletRequestParameterException(MissingServletRequestParameterException exception, HttpServletResponse response) throws IOException {
        log.error("MissingServletRequestParameterException: ", exception);

        ResponseHelper.writeFieldError(response, exception.getParameterName(), exception.getMessage());
    }

    /**
     * @implNote 스프링에서 요청의 파라미터 타입이 컨트롤러에서 기대하는 메소드의 파라미터 타입과 일치하지 않을 때 발생하는 예외
     */
    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public void handleMethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException exception, HttpServletResponse response) throws IOException {
        log.error("MethodArgumentTypeMismatchException: ", exception);

        ResponseHelper.writeFieldError(response, exception.getPropertyName(), exception.getMessage());
    }

    /**
     * @implNote 스프링에서 메소드 파라미터의 검증(Validation) 과정에서 요구사항을 만족하지 못하는 파라미터가 있을 때 발생하는 예외
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public void handleMethodArgumentNotValidException(MethodArgumentNotValidException exception, HttpServletResponse response) throws IOException {
        log.error("MethodArgumentNotValidException: ", exception);

        FieldError fieldError = Objects.requireNonNull(exception.getBindingResult().getFieldError());
        ResponseHelper.writeFieldError(response, fieldError.getField(), fieldError.getDefaultMessage());
    }

    /**
     * @implNote 데이터베이스 제약 조건을 위반했을 때 발생하는 예외
     */
    @ExceptionHandler(DataIntegrityViolationException.class)
    public void handleDataIntegrityViolationException(DataIntegrityViolationException exception, HttpServletResponse response) throws IOException {
        log.error("DataIntegrityViolationException: ", exception);

        ResponseHelper.writeError(response, HttpStatus.BAD_REQUEST, "잘못된 데이터가 입력되었습니다");
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
     * @implNote 요청한 리소스를 찾을 수 없을 때 발생하는 예외
     */
    @ExceptionHandler(NoResourceFoundException.class)
    public void handleNoResourceFoundException(NoResourceFoundException exception, HttpServletResponse response) throws IOException {
        log.error("NoResourceFoundException: {}", exception.getResourcePath());

        ResponseHelper.writeError(response, HttpStatus.NOT_FOUND, exception.getMessage());
    }

    /**
     * @implNote {@link ResponseStatusException} 예외를 처리하는 핸들러 메소드
     */
    @ExceptionHandler(ResponseStatusException.class)
    public void handleResponseStatusException(ResponseStatusException exception, HttpServletResponse response) throws IOException {
        log.error("ResponseStatusException: {}", exception.getReason());

        if (exception instanceof BaseResponseStatusException e) {
            ResponseHelper.write(response, exception.getStatusCode(), e.toErrorResponse());
        } else {
            String errorMessage = exception.getReason() == null ? exception.getMessage() : exception.getReason();
            ResponseHelper.writeError(response, exception.getStatusCode(), errorMessage);
        }
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