package today.wtfood.server.dto.inquiry;

import today.wtfood.server.dto.EntityDto;
import today.wtfood.server.entity.Inquiry;

/**
 * DTO for {@link today.wtfood.server.entity.Inquiry}
 */
public record InquiryDto(
        String title,
        String content,
        String image
) implements EntityDto<Inquiry> {

    public Inquiry apply(Inquiry entity) {
        entity.setTitle(title);
        entity.setContent(content);
        entity.setImage(image);
        return entity;
    }

    public Inquiry apply(Inquiry entity, String username) {
        apply(entity);
        entity.setUsername(username);
        return entity;
    }

}
