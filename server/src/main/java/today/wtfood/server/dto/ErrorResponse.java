package today.wtfood.server.dto;

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
}
