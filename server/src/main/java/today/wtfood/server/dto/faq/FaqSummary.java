package today.wtfood.server.dto.faq;

import today.wtfood.server.entity.Faq;

import java.sql.Timestamp;

/**
 * Projection for {@link Faq}
 */

public interface FaqSummary {
    
    long getId();

    String getTitle();

    Timestamp getDate();
}
