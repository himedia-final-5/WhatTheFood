package today.wtfood.server.dto;

/**
 * 페이지네이션 정보 DTO
 */
public record Pagination(
        int page,
        int size,
        long totalElements,
        int totalPages,
        boolean first,
        boolean last
) {
}
