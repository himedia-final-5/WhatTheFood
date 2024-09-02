package today.wtfood.server.dto.recipe;

import java.sql.Timestamp;

/**
 * Recipe 엔티티의 요약 정보를 제공하는 DTO
 *
 * @implNote Projection for {@link today.wtfood.server.entity.Recipe}
 */
public interface RecipeSummaryWithFavorite {

    Long getId();                  // 레시피 ID

    String getTitle();            // 제목

    String getBannerImage();      // 대표 사진 경로

    Integer getViewCount();       // 조회수

    String getCookingTime();     // 조리 시간

    Integer getServings();        // 인원

    Integer getLevel();           // 난이도

    String getCategory();         // 카테고리

    boolean isFavorite();         // 찜 여부

    Timestamp getCreatedDate();   // 작성 시간

    MemberSummary getMember();    // 작성자

    /**
     * 작성자 정보 DTO
     */
    interface MemberSummary {
        Long getId();          // 회원 ID

        String getNickname(); // 닉네임

        String getProfileImage(); // 프로필 사진 경로
    }

}
