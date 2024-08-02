package today.wtfood.server.dto.member;

import today.wtfood.server.entity.Member;

import java.util.List;

/**
 * 회원 프로필 조회 응답 시 필요한 정보 DTO
 *
 * @implNote Projection for {@link today.wtfood.server.entity.Member}
 */
public interface MemberDetail {

    Long getId();

    String getNickname();

    String getIntroduce();

    String getProfileImg();

    String getBannerImg();

    List<List<Member.SocialUrl>> getSocialUrls();

    List<MemberSummary> getFollowings();

}