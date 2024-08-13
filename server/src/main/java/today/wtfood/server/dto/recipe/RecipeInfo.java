package today.wtfood.server.dto.recipe;

import today.wtfood.server.entity.Member;
import today.wtfood.server.entity.Recipe;

import java.util.List;
import java.util.Set;

/**
 * Projection for {@link today.wtfood.server.entity.Recipe}
 */
public interface RecipeInfo {
    List<String> getIngredients();

    List<String> getCookingTools();

    List<String> getGuideLinks();

    List<Recipe.Comment> getComments();

    Set<Member> getFavoriteByMembers();
}