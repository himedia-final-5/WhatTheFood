package today.wtfood.server.dto;

/**
 * 데이터 생성 후 자동 생성된 ID 응답 시 필요한 정보 DTO
 */
public record ErrorResponse(
        int status,
        String message
) {
}
