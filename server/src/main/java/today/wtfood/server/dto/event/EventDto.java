package today.wtfood.server.dto.event;

import lombok.Value;
import today.wtfood.server.entity.Event;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

/**
 * DTO for {@link today.wtfood.server.entity.Event}
 */

//수정생성용 dto
@Value
public class EventDto implements Serializable {

    String title;
    List<String> contentImages;
    Timestamp startDate;
    Timestamp endDate;
    String bannerImage;

    public Event toEntity() {
        Event event = new Event();
        event.setTitle(this.title);
        event.setContentImages(this.contentImages);
        event.setStartDate(this.startDate);
        event.setEndDate(this.endDate);
        event.setBannerImage(this.bannerImage);
        return event;
    }
}