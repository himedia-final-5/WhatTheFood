package today.wtfood.server.dto.member;

import today.wtfood.server.entity.Member;

/**
 * 회원 인증 응답 시 필요한 정보 DTO
 *
 * @implNote Projection for {@link today.wtfood.server.entity.Member}
 */
public interface MemberAuth {

    Long getId();

    String getNickname();

    Member.Role getRole();

}