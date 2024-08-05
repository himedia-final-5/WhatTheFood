package today.wtfood.server.dto.event;

import java.sql.Timestamp;

/**
 * Projection for {@link today.wtfood.server.entity.Event}
 */

//디테일
public interface EventDetail {
    int getId();

    String getTitle();

    String getContent();

    Timestamp getStartDate();

    Timestamp getEndDate();

    String getImageUrl();
}