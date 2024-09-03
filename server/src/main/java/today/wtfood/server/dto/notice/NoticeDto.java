package today.wtfood.server.dto.notice;

import today.wtfood.server.dto.EntityDto;
import today.wtfood.server.entity.Notice;

/**
 * DTO for {@link Notice}
 */
public record NoticeDto(
        String title,
        String content
) implements EntityDto<Notice> {

    public Notice apply(Notice entity) {
        entity.setTitle(this.title);
        entity.setContent(this.content);
        return entity;
    }

}
