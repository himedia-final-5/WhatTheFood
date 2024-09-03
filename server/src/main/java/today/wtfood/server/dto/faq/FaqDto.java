package today.wtfood.server.dto.faq;

import today.wtfood.server.dto.EntityDto;
import today.wtfood.server.entity.Faq;

/**
 * DTO for {@link today.wtfood.server.entity.Faq}
 */
public record FaqDto(
        String title,
        String content
) implements EntityDto<Faq> {

    public Faq apply(Faq entity) {
        entity.setTitle(title);
        entity.setContent(content);
        return entity;
    }

}
