package today.wtfood.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.server.ResponseStatusException;

public class BadRequestException extends ResponseStatusException {

    /**
     * 필드 이름
     */
    private String field;

    public BadRequestException(String message) {
        this(message, null);
    }

    public BadRequestException(String message, String field) {
        super(HttpStatus.BAD_REQUEST, message);
        this.field = field;
    }

}