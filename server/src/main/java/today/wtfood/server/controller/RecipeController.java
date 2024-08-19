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
import today.wtfood.server.service.RecipeService;

import java.util.List;

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

    // 제목으로 레시피 검색
    @GetMapping("/search/title")
    @PreAuthorize("permitAll()")
    public PageResponse<Recipe> searchRecipesByTitle(
            @RequestParam("title") String title,
            Pageable pageable
    ) {
        return PageResponse.of(rs.getRecipesByTitle(title, pageable));
    }

    // 설명으로 레시피 검색
    @GetMapping("/search/description")
    @PreAuthorize("permitAll()")
    public PageResponse<Recipe> searchRecipesByDescription(
            @RequestParam("description") String description,
            Pageable pageable
    ) {
        return PageResponse.of(rs.getRecipesByDescription(description, pageable));
    }

    // 제목과 설명으로 레시피 검색
    @GetMapping("/search")
    @PreAuthorize("permitAll()")
    public PageResponse<Recipe> searchRecipesByTitleAndDescription(
            @RequestParam("title") String title,
            @RequestParam("description") String description,
            Pageable pageable
    ) {
        return PageResponse.of(rs.getRecipesByTitleAndDescription(title, description, pageable));
    }
    //제목 설명 카테고리 한코드로 해서 검색으로 뭉쳐서 보내고 한번에 받는 코드로 수정하기

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
    public void addFavoriteRecipe(@RequestParam long memberId, @PathVariable long recipeId) {
        rs.addFavoriteRecipe(memberId, recipeId);
    }

    // 찜한 레시피 목록 조회
    @GetMapping("/favorites")
    @PreAuthorize("isAuthenticated()")
    public List<Recipe> getFavoriteRecipes(@RequestParam long memberId) {
        return rs.getFavoriteRecipes(memberId);
    }

    // 찜하기 취소
    @DeleteMapping("/{recipeId}/favorite")
    @PreAuthorize("isAuthenticated()")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFavoriteRecipe(@RequestParam long memberId, @PathVariable long recipeId) {
        rs.deleteFavoriteRecipe(memberId, recipeId);
    }


}
