package today.wtfood.server.dto.member;

import today.wtfood.server.entity.member.Member;

/**
 * 회원 목록에 표시될 정보만 포함한 프로젝션 인터페이스
 *
 * @implNote Projection for {@link Member}
 */
public interface MemberProfileSummary {

    long getId();

    String getNickname();

    String getProfileImage();

    boolean isFollowing();

}
