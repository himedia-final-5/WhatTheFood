package today.wtfood.server.dto.recipe;

import java.sql.Timestamp;
import java.util.List;

/**
 * Recipe 엔티티의 요약 정보를 제공하는 DTO
 *
 * @implNote Projection for {@link today.wtfood.server.entity.Recipe}
 */
public interface RecipeSummary {

    Long getId();                  // 레시피 ID

    String getTitle();            // 제목

    String getDescription();      // 설명

    String getBannerImage();      // 대표 사진 경로

    Integer getViewCount();       // 조회수

    Integer getCookingTime();     // 조리 시간

    Integer getServings();        // 인원

    Integer getLevel();           // 난이도

    String getCategory();         // 카테고리

    Timestamp getCreatedDate();   // 작성 시간

    // 작성자 정보 가져오기
    MemberSummary getMember();    // 작성자

    // 조리 단계 정보를 가져오기
    List<CookingStepSummary> getCookingSteps(); // 조리 순서

    // 완료된 사진 경로 가져오기
    List<String> getFinishedImages(); // 완성품 사진 경로

    // 태그 가져오기
    List<String> getTags(); // 태그

    /**
     * 작성자 정보 DTO
     */
    interface MemberSummary {
        Long getId();          // 회원 ID

        String getNickname();  // 닉네임
    }

    /**
     * 조리 단계 정보 DTO
     */
    interface CookingStepSummary {
        Integer getStepNumber(); // 조리 순서 번호

        String getImageUrl();   // 이미지 URL

        String getDescription(); // 조리 내용
    }
}