package today.wtfood.server.dto.inquiry;

import today.wtfood.server.entity.Inquiry;

/**
 * DTO for {@link today.wtfood.server.entity.Inquiry}
 */
public record InquiryDto(
        String email,
        String title,
        String content
) {
    public Inquiry toEntity() {
        return Inquiry.builder()
                .email(email)
                .title(title)
                .content(content)
                .build();
    }
}