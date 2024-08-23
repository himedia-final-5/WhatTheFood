package today.wtfood.server.exception;

import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

@Getter
public class BadRequestException extends BaseResponseStatusException {

    @Override
    public @NonNull HttpStatusCode getStatusCode() {
        return HttpStatus.BAD_REQUEST;
    }

    public BadRequestException(@NonNull String reason) {
        super(reason, null, null);
    }

    public BadRequestException(@NonNull String reason, @Nullable String field) {
        super(reason, field, null);
    }

    public BadRequestException(@NonNull String reason, @Nullable Throwable cause) {
        super(reason, null, cause);
    }

    public BadRequestException(@NonNull String reason, @Nullable String field, @Nullable Throwable cause) {
        super(reason, field, cause);
    }

}
