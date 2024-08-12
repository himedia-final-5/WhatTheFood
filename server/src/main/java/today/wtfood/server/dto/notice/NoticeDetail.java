package today.wtfood.server.dto.notice;

import java.sql.Timestamp;

/**
 * Projection for {@link today.wtfood.server.entity.Notice}
 */
public interface NoticeDetail extends NoticeSummary {
    long getId();

    Timestamp getWriteDate();

    String getTitle();

    String getContent();
}