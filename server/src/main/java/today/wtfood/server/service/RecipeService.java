package today.wtfood.server.service;

import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.recipe.*;
import today.wtfood.server.entity.Member;
import today.wtfood.server.entity.Recipe;
import today.wtfood.server.exception.NotFoundException;
import today.wtfood.server.exception.UnauthorizedException;
import today.wtfood.server.repository.CommentRepository;
import today.wtfood.server.repository.MemberRepository;
import today.wtfood.server.repository.RecipeRepository;

import java.util.List;

@Service
@Transactional
public class RecipeService {

    private final RecipeRepository rr;
    private final MemberRepository mr;
    private final CommentRepository cr; // CommentRepository 주입

    public RecipeService(RecipeRepository rr, MemberRepository mr, CommentRepository cr) {
        this.rr = rr;
        this.mr = mr;
        this.cr = cr;
    }

    // 레시피 생성
    public Recipe createRecipe(RecipeDto recipe) {
        return rr.save(recipe.toEntity());
    }

    // 레시피 리스트 (페이지네이션)
    public Page<RecipeSummary> getRecipeList(Pageable pageable) {
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

    public Page<RecipeSummary> searchRecipes(String term, Pageable pageable) {
        return rr.searchRecipes(term, pageable);
    }

    // 조회수
    @Transactional
    public void incrementViewCount(Long id) {
        Recipe recipe = rr.findById(id)
                .orElseThrow(() -> new NotFoundException("Recipe not found with id " + id));
        recipe.setViewCount(recipe.getViewCount() + 1);
        rr.save(recipe);
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
        recipe.setIngredientImage(updatedRecipe.getIngredientImage());
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
    public Page<RecipeSummary> getFavoriteRecipes(long memberId, Pageable pageable) {
        Member member = mr.findById(memberId)
                .orElseThrow(() -> new UnauthorizedException("회원 정보를 찾을 수 없습니다", "memberId"));
        return rr.findByFavoriteByMembersContains(member, pageable);
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

    // 카테고리
    public Page<RecipeSummary> getRecipesByCategory(String category, Pageable pageable) {
        return rr.findByCategory(category, pageable);
    }

    // 댓글 목록 조회
    public Page<CommentSummary> getCommentsList(long recipeId, Pageable pageable) {
        return cr.findByRecipeIdOrderByIdDesc(pageable, recipeId);
    }

    // 댓글 추가
    public void addComment(CommentDto commentDto, long recipeId, long memberId) {
        Recipe recipe = rr.findById(recipeId)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "recipeId"));
        Member member = mr.findById(memberId)
                .orElseThrow(() -> new NotFoundException("회원정보를 찾을 수 없습니다", "memberId"));


        Recipe.Comment comment = commentDto.toEntity(recipe);
        comment.setMember(member);
        cr.save(comment);
    }

    // 댓글 수정
    public void updateComment(long commentId, CommentDto commentDto) {
        Recipe.Comment comment = cr.findById(commentId)
                .orElseThrow(() -> new NotFoundException("댓글을 찾을 수 없습니다", "commentId"));

        comment.setContent(commentDto.getContent());
        cr.save(comment);
    }

    // 댓글 삭제
    public void deleteComment(long commentId) {
        Recipe.Comment comment = cr.findById(commentId)
                .orElseThrow(() -> new NotFoundException("댓글을 찾을 수 없습니다", "commentId"));

        cr.delete(comment);
    }
}
