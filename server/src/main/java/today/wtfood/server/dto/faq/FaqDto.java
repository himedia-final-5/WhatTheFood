package today.wtfood.server.dto.faq;

import today.wtfood.server.entity.Faq;

/**
 * DTO for {@link today.wtfood.server.entity.Faq}
 */

public record FaqDto(
        String title,
        String content
) {

    public Faq toEntity() {
        return Faq.builder()
                .title(title)
                .content(content)
                .build();
    }
}
