package today.wtfood.server.dto.notice;

import lombok.Value;
import today.wtfood.server.entity.Notice;

import java.io.Serializable;

/**
 * DTO for {@link today.wtfood.server.entity.Notice}
 */
@Value
public class NoticeDto implements Serializable {

    String title;
    String content;

    public Notice toEntity() {
        Notice notice = new Notice();
        notice.setTitle(this.title);
        notice.setContent(this.content);

        return notice;
    }

}
