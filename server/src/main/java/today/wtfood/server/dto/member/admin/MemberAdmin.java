package today.wtfood.server.dto.member.admin;

import today.wtfood.server.entity.member.Member;

/**
 * Projection for {@link Member}
 */
public interface MemberAdmin {

    Long getId();

    String getUsername();

    String getEmail();

    String getNickname();

    String getIntroduce();

    Member.Role getRole();

}
