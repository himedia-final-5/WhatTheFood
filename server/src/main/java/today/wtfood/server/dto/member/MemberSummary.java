package today.wtfood.server.dto.member;

import java.util.List;

/**
 * 회원 목록 조회 응답 시 필요한 정보 DTO
 *
 * @implNote Projection for {@link today.wtfood.server.entity.Member}
 */
public interface MemberSummary {

    Long getId();

    String getNickname();

    String getEmail();

    String getUsername();

    List<MemberSummary> getFollowings();

    default String getProfileImg() {
        return "/profile/" + getId();
    }

}