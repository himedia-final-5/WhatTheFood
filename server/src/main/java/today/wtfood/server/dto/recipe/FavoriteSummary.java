package today.wtfood.server.dto.recipe;


import java.util.List;

/**
 * Recipe 엔티티의 요약 정보를 제공하는 DTO
 *
 * @implNote Projection for {@link today.wtfood.server.entity.Recipe}
 */


public interface FavoriteSummary {

    Long getId();                  // 레시피 ID

    String getTitle();

    String getBannerImage();

    List<MemberSummary> getFavoriteByMembers(); // 찜한 멤버 목록

    interface MemberSummary {
        Long getId();          // 회원 ID

        String getNickname();  // 닉네임
    }
}
