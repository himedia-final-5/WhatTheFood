package today.wtfood.server.dto.member;

import today.wtfood.server.entity.member.Member;

/**
 * 회원 목록 조회 응답 시 필요한 정보 DTO
 *
 * @implNote Projection for {@link Member}
 */
public interface MemberSummary extends MemberAuth {

    String getEmail();

    String getUsername();

    String getNickname();

}
