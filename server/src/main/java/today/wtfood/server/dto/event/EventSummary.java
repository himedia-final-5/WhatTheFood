package today.wtfood.server.dto.event;

import java.sql.Timestamp;

/**
 * Projection for {@link today.wtfood.server.entity.Event}
 */
//요약정보
public interface EventSummary {
    long getId();

    String getTitle();

    Timestamp getStartDate();

    Timestamp getEndDate();

    String getImageUrl();
}