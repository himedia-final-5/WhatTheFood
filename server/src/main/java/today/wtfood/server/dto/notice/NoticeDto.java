package today.wtfood.server.dto.notice;

import lombok.Value;
import org.hibernate.annotations.CreationTimestamp;
import today.wtfood.server.entity.Notice;

import java.io.Serializable;
import java.sql.Timestamp;


/**
 * DTO for {@link today.wtfood.server.entity.Notice}
 */

@Value
public class NoticeDto implements Serializable {


    @CreationTimestamp
    Timestamp writeDate;

    String title;
    String content;

    public Notice toEntity() {
        Notice notice = new Notice();
        notice.setTitle(this.title);
        notice.setContent(this.content);
        notice.setWriteDate(this.writeDate);

        return notice;
    }
    //생성
    //수정
    //응답


}
