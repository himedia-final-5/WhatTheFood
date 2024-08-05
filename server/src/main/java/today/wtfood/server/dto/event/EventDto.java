package today.wtfood.server.dto.event;

import lombok.Value;
import today.wtfood.server.entity.Event;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * DTO for {@link today.wtfood.server.entity.Event}
 */

//수정생성용 dto
@Value
public class EventDto implements Serializable {
    String title;
    String content;
    Timestamp startDate;
    Timestamp endDate;
    String imageUrl;

    public Event toEntity() {
        Event event = new Event();
        event.setTitle(this.title);
        event.setContent(this.content);
        event.setStartDate(this.startDate);
        event.setEndDate(this.endDate);
        event.setImageUrl(this.imageUrl);
        return event;
    }
}