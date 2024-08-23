package today.wtfood.server.dto.recipe;

import java.sql.Timestamp;
import java.util.List;

/**
 * 디테일
 *
 * @implNote Projection for {@link today.wtfood.server.entity.Recipe}
 */
public interface RecipeDetail extends RecipeSummary {

    String title();

    String description();

    String cookingTime();

    Integer servings();

    Integer level();

    String getVideoLink();

    String category();

    List<String> ingredientImage();

    List<String> getIngredients();

    List<String> getCookingTools();

    Timestamp getCreatedDate();

    List<String> getGuideLinks();

    List<String> cookingStep();

    List<String> finishedImages();

    List<String> tags();

    List<CommentSummary> getComments();

    /**
     * 댓글 정보 DTO
     */
    interface CommentSummary {
        Long getId();               // 댓글 ID

        String getContent();        // 댓글 내용

        Timestamp getCreatedDate(); // 댓글 작성 시간

        MemberSummary getMember();  // 댓글 작성자 정보
    }

}
