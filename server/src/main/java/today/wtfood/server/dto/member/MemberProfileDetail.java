package today.wtfood.server.dto.member;

import today.wtfood.server.entity.member.Member;

/**
 * 회원 프로필 페이지에 표시될 정보만 포함한 프로젝션 인터페이스
 *
 * @implNote Projection for {@link Member}
 */
public interface MemberProfileDetail {

    long getId();

    String getRole();

    String getNickname();

    String getIntroduce();

    String getProfileImage();

    String getBannerImage();

    long getFollowerCount();

    long getFollowingCount();

    long getViewCount();

    boolean isFollowing();

}
