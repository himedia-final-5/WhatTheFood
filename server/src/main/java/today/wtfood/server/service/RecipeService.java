package today.wtfood.server.service;

import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.recipe.RecipeDetail;
import today.wtfood.server.dto.recipe.RecipeDto;
import today.wtfood.server.dto.recipe.RecipeInfo;
import today.wtfood.server.entity.Member;
import today.wtfood.server.entity.Recipe;
import today.wtfood.server.exception.NotFoundException;
import today.wtfood.server.exception.UnauthorizedException;
import today.wtfood.server.repository.MemberRepository;
import today.wtfood.server.repository.RecipeRepository;

import java.util.List;

@Service
@Transactional
public class RecipeService {

    private final RecipeRepository rr;
    private final MemberRepository mr;

    public RecipeService(RecipeRepository rr, MemberRepository mr) {
        this.rr = rr;
        this.mr = mr;
    }

    // 레시피 생성
    public Recipe createRecipe(RecipeDto recipe) {
        return rr.save(recipe.toEntity());
    }

    // 레시피 리스트 (페이지네이션)
    public Page<RecipeInfo> getRecipeList(Pageable pageable) {
        return rr.findAllBy(pageable);
    }

    // 모든 레시피 조회
    public List<Recipe> getRecipeList() {
        return rr.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    // ID로 레시피 조회
    public RecipeDetail getRecipeById(long id) {
        return rr.findDetailById(id)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "id"));
    }

    // 제목으로 레시피 검색
    public Page<Recipe> getRecipesByTitle(String title, Pageable pageable) {
        return rr.findByTitle(title, pageable);
    }

    // 설명으로 레시피 검색
    public Page<Recipe> getRecipesByDescription(String description, Pageable pageable) {
        return rr.findByDescription(description, pageable);
    }

    // 제목과 설명으로 레시피 검색
    public Page<Recipe> getRecipesByTitleAndDescription(String title, String description, Pageable pageable) {
        return rr.findByTitleAndDescription(title, description, pageable);
    }


    // 레시피 수정
    @Transactional
    public void updateRecipe(long id, Recipe updatedRecipe) {
        Recipe recipe = rr.findById(id)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "id"));

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
        recipe.setCookingStep(updatedRecipe.getCookingStep());
        recipe.setFinishedImages(updatedRecipe.getFinishedImages());
        recipe.setTags(updatedRecipe.getTags());
    }

    // 레시피 삭제
    public void deleteRecipe(long id) {
        if (!rr.existsById(id)) {
            throw new NotFoundException("레시피를 찾을 수 없습니다", "id");
        }

        rr.deleteById(id);
    }

    // 찜하기 추가
    public void addFavoriteRecipe(long memberId, long recipeId) {
        Member member = mr.findById(memberId)
                .orElseThrow(() -> new UnauthorizedException("회원 정보를 찾을 수 없습니다", "memberId"));
        Recipe recipe = rr.findById(recipeId)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "recipeId"));

        member.getFavoriteRecipes().add(recipe);
        mr.save(member);
    }

    // 찜한 레시피 목록 조회
    public List<Recipe> getFavoriteRecipes(long memberId) {
        Member member = mr.findById(memberId)
                .orElseThrow(() -> new UnauthorizedException("회원 정보를 찾을 수 없습니다", "memberId"));
        return rr.findByFavoriteByMembersContains(member);
    }

    // 찜하기 제거
    public void deleteFavoriteRecipe(long memberId, long recipeId) {
        Member member = mr.findById(memberId)
                .orElseThrow(() -> new UnauthorizedException("회원 정보를 찾을 수 없습니다", "memberId"));
        Recipe recipe = rr.findById(recipeId)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "recipeId"));

        member.getFavoriteRecipes().remove(recipe);
        mr.save(member);
    }

}
