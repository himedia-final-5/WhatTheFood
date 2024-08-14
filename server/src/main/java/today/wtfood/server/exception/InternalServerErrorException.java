package today.wtfood.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

public class InternalServerErrorException extends BaseResponseStatusException {

    @Override
    public @NonNull HttpStatusCode getStatusCode() {
        return HttpStatus.INTERNAL_SERVER_ERROR;
    }

    public InternalServerErrorException(@NonNull String reason) {
        super(reason, null, null);
    }

    public InternalServerErrorException(@NonNull String reason, @Nullable String field) {
        super(reason, field, null);
    }

    public InternalServerErrorException(@NonNull String reason, @Nullable Throwable cause) {
        super(reason, null, cause);
    }

    public InternalServerErrorException(@NonNull String reason, @Nullable String field, @Nullable Throwable cause) {
        super(reason, field, cause);
    }

}
