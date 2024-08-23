package today.wtfood.server.dto.recipe;

import today.wtfood.server.dto.member.MemberSummary;

import java.sql.Timestamp;

/**
 * Recipe.Comment 엔티티의 요약 정보를 제공하는 DTO
 *
 * @implNote Projection for {@link today.wtfood.server.entity.Recipe.Comment}
 */
public interface CommentSummary {

    long getId();

    MemberSummary getMember();

    String getContent();

    Timestamp getCreatedDate();

}
