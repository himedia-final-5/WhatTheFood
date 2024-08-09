package today.wtfood.server.dto.inquiry;

import today.wtfood.server.entity.Inquiry;

/**
 * DTO for {@link today.wtfood.server.entity.Inquiry}
 */
public record InquiryDto(

        String title,
        String content,
        String username) {
    public Inquiry toEntity() {
        return Inquiry.builder()
                .username(username)
                .title(title)
                .content(content)
                .build();
    }
}