package today.wtfood.server.dto.recipe;

import today.wtfood.server.dto.EntityDto;
import today.wtfood.server.entity.Recipe;
import today.wtfood.server.entity.member.Member;

import java.util.List;
import java.util.Set;

/**
 * DTO for {@link today.wtfood.server.entity.Recipe}
 */
public record RecipeDto(
        String bannerImage,
        String title,
        String description,
        String cookingTime,
        Integer servings,
        Integer level,
        String videoLink,
        String category,
        List<String> ingredientImage,
        List<String> ingredients,
        List<String> cookingTools,
        List<String> guideLinks,
        List<Recipe.CookingStep> cookingStep,
        List<String> finishedImages,
        Set<String> tags
) implements EntityDto<Recipe> {

    public Recipe apply(Recipe entity) {
        entity.setBannerImage(bannerImage);
        entity.setTitle(title);
        entity.setDescription(description);
        entity.setCookingTime(cookingTime);
        entity.setServings(servings);
        entity.setLevel(level);
        entity.setVideoLink(videoLink);
        entity.setCategory(category);
        entity.setIngredientImage(ingredientImage);
        entity.setIngredients(ingredients);
        entity.setCookingTools(cookingTools);
        entity.setGuideLinks(guideLinks);
        cookingStep.forEach(step -> step.setRecipe(entity));
        entity.setCookingStep(cookingStep);
        entity.setFinishedImages(finishedImages);
        entity.setTags(tags);
        return entity;
    }

    public Recipe apply(Recipe entity, Member member) {
        apply(entity);
        entity.setMember(member);
        return entity;
    }

}
