package today.wtfood.server.dto.member;

import today.wtfood.server.entity.member.Member;

import java.util.List;

/**
 * 회원 프로필 조회 응답 시 필요한 정보 DTO
 *
 * @implNote Projection for {@link Member}
 */
public interface MemberDetail extends MemberSummary {

    String getIntroduce();

    List<MemberSocialUrl> getSocialUrls();

    default String getBannerImg() {
        return "/banner/" + getId();
    }

    /**
     * @implNote Projection for {@link Member.SocialUrl}
     */
    interface MemberSocialUrl {

        String getName();

        String getUrl();

    }

}