package today.wtfood.server.dto.event;

import today.wtfood.server.dto.EntityDto;
import today.wtfood.server.entity.Event;

import java.sql.Timestamp;
import java.util.List;

/**
 * DTO for {@link Event}
 */
public record EventDto(
        String title,
        List<String> contentImages,
        Timestamp startDate,
        Timestamp endDate,
        String bannerImage
) implements EntityDto<Event> {

    public Event apply(Event entity) {
        entity.setTitle(title);
        entity.setContentImages(contentImages);
        entity.setStartDate(startDate);
        entity.setEndDate(endDate);
        entity.setBannerImage(bannerImage);
        return entity;
    }

}
