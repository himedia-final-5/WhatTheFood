package today.wtfood.server.dto.recipe;

import lombok.Data;
import today.wtfood.server.entity.Recipe;
import today.wtfood.server.entity.member.Member;

import java.io.Serializable;
import java.util.List;

/**
 * DTO for {@link today.wtfood.server.entity.Recipe}
 */
@Data
public class RecipeDto implements Serializable {

    private String bannerImage;
    private String title;
    private String description;
    private String cookingTime;
    private Integer servings;
    private Integer level;
    private String videoLink;
    private String category;
    private List<String> ingredientImage;
    private List<String> ingredients;
    private List<String> cookingTools;
    private List<String> guideLinks;
    private List<Recipe.CookingStep> cookingStep;
    private List<String> finishedImages;
    private List<String> tags;

    public Recipe toEntity(Member member) {
        Recipe recipe = new Recipe();
        recipe.setBannerImage(bannerImage);
        recipe.setTitle(title);
        recipe.setDescription(description);
        recipe.setCookingTime(cookingTime);
        recipe.setServings(servings);
        recipe.setLevel(level);
        recipe.setVideoLink(videoLink);
        recipe.setCategory(category);
        recipe.setIngredientImage(ingredientImage);
        recipe.setIngredients(ingredients);
        recipe.setCookingTools(cookingTools);
        recipe.setGuideLinks(guideLinks);
        recipe.setFinishedImages(finishedImages);
        recipe.setTags(tags);
        recipe.setMember(member); // Set the member from DTO
        return recipe;
    }

}
