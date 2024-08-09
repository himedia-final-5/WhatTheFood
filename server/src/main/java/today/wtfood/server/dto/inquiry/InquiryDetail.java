package today.wtfood.server.dto.inquiry;

import today.wtfood.server.entity.Inquiry;

import java.sql.Timestamp;

/**
 * Projection for {@link Inquiry}
 */
public interface InquiryDetail {
    long getId();

    String getTitle();

    String getContent();

    String getAnswer();

    Timestamp getDate();

    String getUsername();
}