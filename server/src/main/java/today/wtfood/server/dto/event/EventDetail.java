package today.wtfood.server.dto.event;

import java.sql.Timestamp;
import java.util.List;

/**
 * Projection for {@link today.wtfood.server.entity.Event}
 */

//디테일
public interface EventDetail {
    long getId();

    String getTitle();

    List<String> getContentImages();

    Timestamp getStartDate();

    Timestamp getEndDate();

    String getBannerImage();
}