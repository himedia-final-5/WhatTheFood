package today.wtfood.server.dto.faq;

import java.sql.Timestamp;

/**
 * Projection for {@link today.wtfood.server.entity.Faq}
 */

public interface FaqSummary {

    long getId();

    String getTitle();

    Timestamp getDate();

}
