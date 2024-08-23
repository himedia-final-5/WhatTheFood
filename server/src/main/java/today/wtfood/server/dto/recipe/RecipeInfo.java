package today.wtfood.server.dto.recipe;

import today.wtfood.server.dto.member.MemberAuth;

import java.sql.Timestamp;
import java.util.List;
import java.util.Set;

/**
 * Projection for {@link today.wtfood.server.entity.Recipe}
 */
public interface RecipeInfo {

    long getId();

    Timestamp getCreatedDate();

    Integer getViewCount();

    String getBannerImage();

    String getTitle();

    String getDescription();

    String getCookingTime();

    Integer getServings();

    Integer getLevel();

    String getVideoLink();

    String getCategory();

    List<String> getIngredientImage();

    List<String> getIngredients();

    List<String> getCookingTools();

    List<String> getGuideLinks();

    List<String> getFinishedImages();

    List<String> getTags();

    List<CookingStepInfo> getCookingStep();

    List<CommentInfo> getComments();

    MemberAuth getMember();

    Set<MemberAuth> getFavoriteByMembers();

    /**
     * Projection for {@link today.wtfood.server.entity.Recipe.CookingStep}
     */
    interface CookingStepInfo {
        Long getId();

        Integer getStepNumber();

        String getImageUrl();

        String getDescription();

    }

    /**
     * Projection for {@link today.wtfood.server.entity.Recipe.Comment}
     */
    interface CommentInfo {
        Long getId();

        String getContent();

        Timestamp getCreatedDate();

        MemberAuth getMember();
    }

}
