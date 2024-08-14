package today.wtfood.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

public class ForbiddenException extends BaseResponseStatusException {

    @Override
    public @NonNull HttpStatusCode getStatusCode() {
        return HttpStatus.FORBIDDEN;
    }

    public ForbiddenException(@NonNull String reason) {
        super(reason, null, null);
    }

    public ForbiddenException(@NonNull String reason, @Nullable String field) {
        super(reason, field, null);
    }

    public ForbiddenException(@NonNull String reason, @Nullable Throwable cause) {
        super(reason, null, cause);
    }

    public ForbiddenException(@NonNull String reason, @Nullable String field, @Nullable Throwable cause) {
        super(reason, field, cause);
    }

}

