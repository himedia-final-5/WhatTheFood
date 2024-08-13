package today.wtfood.server.dto.member.admin;

import today.wtfood.server.entity.Member;

/**
 * Projection for {@link today.wtfood.server.entity.Member}
 */
public interface MemberAdmin {
    Long getId();

    String getUsername();

    String getEmail();

    String getNickname();

    String getIntroduce();

    Member.Role getRole();
}