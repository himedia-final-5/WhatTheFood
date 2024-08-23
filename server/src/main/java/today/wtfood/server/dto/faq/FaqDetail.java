package today.wtfood.server.dto.faq;

import java.sql.Timestamp;

/**
 * Projection for {@link today.wtfood.server.entity.Faq}
 */

public interface FaqDetail {

    long getId();

    String getTitle();

    String getContent();

    Timestamp getDate();

}
