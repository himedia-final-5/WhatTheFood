package today.wtfood.server.dto.event;

import java.util.List;

/**
 * Projection for {@link today.wtfood.server.entity.Event}
 */

//디테일
public interface EventDetail extends EventSummary {

    List<String> getContentImages();

}