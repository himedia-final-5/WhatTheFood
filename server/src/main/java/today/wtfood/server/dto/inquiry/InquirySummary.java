package today.wtfood.server.dto.inquiry;

import java.sql.Timestamp;

/**
 * Projection for {@link today.wtfood.server.entity.Inquiry}
 */
public interface InquirySummary {

    long getId();

    String getTitle();

    String getUsername();

    Timestamp getDate();

    String getAnswer();

}
