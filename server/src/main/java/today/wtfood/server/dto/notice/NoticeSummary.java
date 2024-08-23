package today.wtfood.server.dto.notice;

import java.sql.Timestamp;

/**
 * Projection for {@link today.wtfood.server.entity.Notice}
 */
public interface NoticeSummary {

    long getId();

    Timestamp getWriteDate();

    String getContent();

    String getTitle();

}