package today.wtfood.server.dto;

import org.springframework.data.domain.Page;

import java.util.List;

/**
 * 목록 데이터 응답 시 필요한 정보 DTO
 */
public record PageResponse<T>(
        List<T> content,
        Pagination pagination
) {

    public static <T> PageResponse<T> of(Page<T> page) {
        return new PageResponse<>(
                page.getContent(),
                new Pagination(
                        page.getNumber(),
                        page.getSize(),
                        page.getTotalElements(),
                        page.getTotalPages(),
                        page.isFirst(),
                        page.isLast()
                )
        );
    }

}