package today.wtfood.server.service;

import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.recipe.RecipeDto;
import today.wtfood.server.entity.Recipe;
import today.wtfood.server.repository.RecipeRepository;

@Service
@Transactional
public class RecipeService {

    private final RecipeRepository rr;

    public RecipeService(RecipeRepository rr) {
        this.rr = rr;
    }

    // 레시피 생성
    public Recipe createRecipe(RecipeDto recipe) {
        return rr.save(recipe.toEntity());
    }

    // 모든 레시피 조회 (페이지네이션)
    public Page<Recipe> getAllRecipes(Pageable pageable) {
        return recipeRepository.findAll(pageable);
    }

    // 제목으로 레시피 검색
    public Page<Recipe> getRecipesByTitle(String title, Pageable pageable) {
        return recipeRepository.findByTitleContaining(title, pageable);
    }

    // 설명으로 레시피 검색
    public Page<Recipe> getRecipesByDescription(String description, Pageable pageable) {
        return recipeRepository.findByDescriptionContaining(description, pageable);
    }

    // 제목과 설명으로 레시피 검색
    public Page<Recipe> getRecipesByTitleAndDescription(String title, String description, Pageable pageable) {
        return recipeRepository.findByTitleContainingAndDescriptionContaining(title, description, pageable);
    }

    // ID로 레시피 조회
    public Recipe getRecipeById(long id) {
        return recipeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recipe with id " + id + " not found"));
    }

    // 레시피 수정
    @Transactional
    public Recipe updateRecipe(long id, Recipe updatedRecipe) {
        Recipe recipe = recipeRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Recipe with id " + id + " not found"));

        recipe.setTitle(updatedRecipe.getTitle());
        recipe.setDescription(updatedRecipe.getDescription());
        recipe.setBannerImage(updatedRecipe.getBannerImage());
        recipe.setCookingTime(updatedRecipe.getCookingTime());
        recipe.setServings(updatedRecipe.getServings());
        recipe.setLevel(updatedRecipe.getLevel());
        recipe.setVideoLink(updatedRecipe.getVideoLink());
        recipe.setCategory(updatedRecipe.getCategory());
        recipe.setIngredients(updatedRecipe.getIngredients());
        recipe.setCookingTools(updatedRecipe.getCookingTools());
        recipe.setGuideLinks(updatedRecipe.getGuideLinks());
        recipe.setCookingSteps(updatedRecipe.getCookingSteps());
        recipe.setFinishedImages(updatedRecipe.getFinishedImages());
        recipe.setTags(updatedRecipe.getTags());

        return recipeRepository.save(recipe);
    }

    // 레시피 삭제
    public void deleteRecipe(long id) {
        if (recipeRepository.existsById(id)) {
            recipeRepository.deleteById(id);
        } else {
            throw new RuntimeException("Recipe not found with id " + id);
        }
    }
}
