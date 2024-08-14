package today.wtfood.server.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

public class NotFoundException extends BaseResponseStatusException {

    @Override
    public @NonNull HttpStatusCode getStatusCode() {
        return HttpStatus.NOT_FOUND;
    }

    public NotFoundException(@NonNull String reason) {
        super(reason, null, null);
    }

    public NotFoundException(@NonNull String reason, @Nullable String field) {
        super(reason, field, null);
    }

    public NotFoundException(@NonNull String reason, @Nullable Throwable cause) {
        super(reason, null, cause);
    }

    public NotFoundException(@NonNull String reason, @Nullable String field, @Nullable Throwable cause) {
        super(reason, field, cause);
    }

}
