package today.wtfood.server.dto.inquiry;

import today.wtfood.server.entity.Inquiry;

import java.sql.Timestamp;

/**
 * Projection for {@link Inquiry}
 */
public interface InquirySummary {
    long getId();

    String getTitle();

    Timestamp getDate();

    String getAnswer();
}