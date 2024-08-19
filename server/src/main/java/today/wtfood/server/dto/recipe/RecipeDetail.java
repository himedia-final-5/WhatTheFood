package today.wtfood.server.dto.recipe;

import java.util.List;

/**
 * Projection for {@link today.wtfood.server.entity.Event}
 */

//디테일
public interface RecipeDetail extends RecipeSummary {
    String title();

    String description();

    Integer cookingTime();

    Integer servings();

    Integer level();

    String videoLink();

    String category();

    List<String> ingredientImage();

    List<String> ingredients();

    List<String> cookingTools();

    List<String> guideLinks();

    List<String> cookingStep();

    List<String> finishedImages();

    List<String> tags();


}
