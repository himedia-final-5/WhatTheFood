package today.wtfood.server.dto.noticedto;

import java.sql.Timestamp;

/**
 * Projection for {@link today.wtfood.server.entity.Notice}
 */
public interface NoticeSummary {
    long getId();

    Timestamp getWriteDate();

    String getTitle();
}