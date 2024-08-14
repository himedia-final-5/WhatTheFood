package today.wtfood.server.dto;

import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;

/**
 * 사용자 요청 처리 실패 시 필요한 오류 정보 DTO
 */
public record ErrorResponse(
        int status,
        @Nullable String field,
        @NonNull String message
) {

    /**
     * 필드 이름이 없는 경우
     */
    public ErrorResponse(int status, String message) {
        this(status, null, message);
    }

    /**
     * 필드 이름이 있는 경우 (상태 코드 : BAD_REQUEST = 400)
     */
    public ErrorResponse(String field, String message) {
        this(HttpStatus.BAD_REQUEST.value(), field, message);
    }

}
