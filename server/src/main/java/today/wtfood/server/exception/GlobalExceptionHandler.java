package today.wtfood.server.exception;

import io.jsonwebtoken.JwtException;
import lombok.extern.log4j.Log4j2;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authorization.AuthorizationDeniedException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.method.annotation.MethodArgumentTypeMismatchException;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.resource.NoResourceFoundException;
import today.wtfood.server.dto.ErrorResponse;

import java.util.Objects;

@Log4j2
@ControllerAdvice
public class GlobalExceptionHandler {

    /**
     * @implNote JWT 토큰을 처리하는 과정에서 발생하는 예외
     */
    @ExceptionHandler(JwtException.class)
    public ResponseEntity<ErrorResponse> handleJwtException(JwtException exception) {
        log.error("JWT Exception: ", exception);

        return createResponseEntity(HttpStatus.UNAUTHORIZED, "잘못된 토큰입니다");
    }

    /**
     * @implNote 권한이 없는 사용자가 접근하려고 할 때 발생하는 예외
     */
    @ExceptionHandler(AuthorizationDeniedException.class)
    public ResponseEntity<ErrorResponse> handleAuthorizationDeniedException(AuthorizationDeniedException exception) {
        log.error("AuthorizationDeniedException: ", exception);

        return createResponseEntity(HttpStatus.FORBIDDEN, "권한이 없습니다");
    }

    /**
     * @implNote 스프링에서 {@link RequestParam} 어노테이션으로 요구된 파라미터가 요청에 포함되지 않았을 경우에 발생하는 예외
     */
    @ExceptionHandler(MissingServletRequestParameterException.class)
    public ResponseEntity<ErrorResponse> handleMissingServletRequestParameterException(MissingServletRequestParameterException exception) {
        log.error("MissingServletRequestParameterException: ", exception);

        return createResponseEntity(HttpStatus.BAD_REQUEST, exception.getParameterName(), exception.getMessage());
    }

    /**
     * @implNote 스프링에서 요청의 파라미터 타입이 컨트롤러에서 기대하는 메소드의 파라미터 타입과 일치하지 않을 때 발생하는 예외
     */
    @ExceptionHandler(MethodArgumentTypeMismatchException.class)
    public ResponseEntity<ErrorResponse> handleMethodArgumentTypeMismatchException(MethodArgumentTypeMismatchException exception) {
        log.error("MethodArgumentTypeMismatchException: ", exception);

        return createResponseEntity(HttpStatus.BAD_REQUEST, exception.getPropertyName(), exception.getMessage());
    }

    /**
     * @implNote 스프링에서 메소드 파라미터의 검증(Validation) 과정에서 요구사항을 만족하지 못하는 파라미터가 있을 때 발생하는 예외
     */
    @ExceptionHandler(MethodArgumentNotValidException.class)
    public ResponseEntity<ErrorResponse> handleMethodArgumentNotValidException(MethodArgumentNotValidException exception) {
        log.error("MethodArgumentNotValidException: ", exception);

        FieldError fieldError = Objects.requireNonNull(exception.getBindingResult().getFieldError());
        return createResponseEntity(HttpStatus.BAD_REQUEST, fieldError.getField(), fieldError.getDefaultMessage());
    }

    /**
     * @implNote 데이터베이스 제약 조건을 위반했을 때 발생하는 예외
     */
    @ExceptionHandler(DataIntegrityViolationException.class)
    public ResponseEntity<ErrorResponse> handleDataIntegrityViolationException(DataIntegrityViolationException exception) {
        log.error("DataIntegrityViolationException: ", exception);

        return createResponseEntity(HttpStatus.BAD_REQUEST, "잘못된 데이터가 입력되었습니다");
    }

    /**
     * @implNote 메서드 인자로 전달된 값이 잘못된 경우 발생하는 예외
     */
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<ErrorResponse> handleIllegalArgumentException(IllegalArgumentException exception) {
        log.error("IllegalArgumentException: ", exception);

        return createResponseEntity(HttpStatus.BAD_REQUEST, exception.getMessage());
    }

    /**
     * @implNote 사용자 이름을 찾을 수 없을 때 발생하는 예외
     */
    @ExceptionHandler(UsernameNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleUsernameNotFoundException(UsernameNotFoundException exception) {
        log.error("UsernameNotFoundException: ", exception);

        return createResponseEntity(HttpStatus.UNAUTHORIZED, exception.getMessage());
    }

    /**
     * @implNote 요청한 리소스를 찾을 수 없을 때 발생하는 예외
     */
    @ExceptionHandler(NoResourceFoundException.class)
    public ResponseEntity<ErrorResponse> handleNoResourceFoundException(NoResourceFoundException exception) {
        log.error("NoResourceFoundException: {}", exception.getResourcePath());

        return createResponseEntity(HttpStatus.NOT_FOUND, exception.getMessage());
    }

    /**
     * @implNote {@link ResponseStatusException} 예외를 처리하는 핸들러 메소드
     */
    @ExceptionHandler(ResponseStatusException.class)
    public ResponseEntity<ErrorResponse> handleResponseStatusException(ResponseStatusException exception) {
        log.error("ResponseStatusException: {}", exception.getReason());

        if (exception instanceof BaseResponseStatusException e) {
            return createResponseEntity(e.getStatusCode(), e.getReason());
        } else {
            String errorMessage = exception.getReason() == null ? exception.getMessage() : exception.getReason();
            return createResponseEntity(exception.getStatusCode(), errorMessage);
        }
    }

    /**
     * @implNote 위 핸들러에서 처리되지 않은 모든 예외
     */
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleException(Exception exception) {
        log.error("Exception: ", exception);

        return createResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR, exception.getMessage());
    }

    /**
     * 응답 코드와 필드 이름과 메시지를 포함하는 응답 엔티티 생성
     */
    public static ResponseEntity<ErrorResponse> createResponseEntity(HttpStatusCode status, String field, String message) {
        return ResponseEntity.status(status).body(new ErrorResponse(status.value(), field, message));
    }

    /**
     * 응답 코드와 메시지를 포함하는 응답 엔티티 생성
     */
    public static ResponseEntity<ErrorResponse> createResponseEntity(HttpStatusCode status, String message) {
        return createResponseEntity(status, null, message);
    }

}