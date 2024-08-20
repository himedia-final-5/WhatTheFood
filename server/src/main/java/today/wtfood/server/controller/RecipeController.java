package today.wtfood.server.controller;

import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.GeneratedId;
import today.wtfood.server.dto.PageResponse;
import today.wtfood.server.dto.recipe.RecipeDetail;
import today.wtfood.server.dto.recipe.RecipeDto;
import today.wtfood.server.dto.recipe.RecipeSummary;
import today.wtfood.server.entity.Recipe;
import today.wtfood.server.security.annotation.CurrentUser;
import today.wtfood.server.service.RecipeService;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    private final RecipeService rs;

    public RecipeController(RecipeService rs) {
        this.rs = rs;
    }

    // 레시피 리스트 (페이지네이션)
    @GetMapping("")
    @PreAuthorize("permitAll()")
    public PageResponse<RecipeSummary> getRecipeList(@RequestParam("category") String category, Pageable pageable) {
        if (category == null || category.isEmpty()) {
            return PageResponse.of(rs.getRecipeList(pageable));
        } else {
            return PageResponse.of(rs.getRecipesByCategory(category, pageable));
        }
    }

    // 레시피 리스트 //레시피번호(id)
    @GetMapping("/{id}")
    @PreAuthorize("permitAll()")
    public RecipeDetail getRecipeById(@PathVariable("id") long id) {
        return rs.getRecipeById(id);
    }

    // 제목, 카테고리, 설명, 해시태그로 레시피 검색
    @GetMapping("/search")
    @PreAuthorize("permitAll()")
    public PageResponse<Recipe> searchRecipes(
            @RequestParam(value = "title", required = false) String title,
            @RequestParam(value = "category", required = false) String category,
            @RequestParam(value = "description", required = false) String description,
            @RequestParam(value = "hashtag", required = false) String hashtag,
            Pageable pageable
    ) {
        return PageResponse.of(rs.searchRecipes(title, category, description, hashtag, pageable));
    }

    //조회수
    @PutMapping("{id}/incrementViewCount")
    public void incrementViewCount(@PathVariable Long id) {
        rs.incrementViewCount(id);
    }

    // 레시피 수정
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateRecipe(
            @PathVariable("id") long id,
            @RequestBody RecipeDto recipeDto
    ) {
        Recipe updatedRecipe = recipeDto.toEntity();
        rs.updateRecipe(id, updatedRecipe);
    }

    // 레시피 삭제
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteRecipe(@PathVariable("id") long id) {
        rs.deleteRecipe(id);
    }

    // 새로운 레시피 생성
    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public GeneratedId<Long> createRecipe(@RequestBody RecipeDto recipeDto) {
        return GeneratedId.of(rs.createRecipe(recipeDto).getId());
    }

    // 레시피 찜하기
    @PostMapping("/{recipeId}/favorite")
    @PreAuthorize("isAuthenticated()")
    public void addFavoriteRecipe(@PathVariable long recipeId, @CurrentUser long memberId) {
        rs.addFavoriteRecipe(memberId, recipeId);
    }

    // 찜한 레시피 목록 조회 (페이지네이션 추가)
    @GetMapping("/favorites")
    @PreAuthorize("isAuthenticated()")
    public PageResponse<RecipeSummary> getFavoriteRecipes(Pageable pageable, @CurrentUser long memberId) {
        return PageResponse.of(rs.getFavoriteRecipes(memberId, pageable));
    }

    // 찜하기 취소
    @DeleteMapping("/{recipeId}/favorite")
    @PreAuthorize("isAuthenticated()")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFavoriteRecipe(@PathVariable long recipeId, @CurrentUser long memberId) {
        rs.deleteFavoriteRecipe(memberId, recipeId);
    }


}
