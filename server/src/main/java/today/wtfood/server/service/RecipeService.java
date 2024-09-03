package today.wtfood.server.service;

import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.recipe.CommentSummary;
import today.wtfood.server.dto.recipe.RecipeDetail;
import today.wtfood.server.dto.recipe.RecipeSummary;
import today.wtfood.server.dto.recipe.RecipeSummaryWithFavorite;
import today.wtfood.server.entity.Recipe;
import today.wtfood.server.entity.member.Member;
import today.wtfood.server.exception.ForbiddenException;
import today.wtfood.server.exception.NotFoundException;
import today.wtfood.server.repository.CommentRepository;
import today.wtfood.server.repository.RecipeRepository;

import java.util.Objects;
import java.util.function.Consumer;

@Service
@Transactional
public class RecipeService {

    private final RecipeRepository rr;
    private final CommentRepository cr;

    public RecipeService(RecipeRepository rr, CommentRepository cr) {
        this.rr = rr;
        this.cr = cr;
    }

    /**
     * 레시피 목록 조회
     *
     * @param pageable      페이지네이션 정보
     * @param category      카테고리
     * @param memberId      회원 ID
     * @param username      회원 이름
     * @param term          검색어
     * @param currentUserId 현재 사용자 ID
     * @return 페이지네이션된 레시피 목록
     */
    public Page<RecipeSummaryWithFavorite> getRecipes(
            Pageable pageable,
            @Nullable String category,
            @Nullable Long memberId,
            @Nullable String username,
            @Nullable String term,
            @Nullable Long currentUserId
    ) {

        return rr.findAllBy(pageable, category, memberId, username, term, currentUserId);
    }

    /**
     * 레시피 조회
     *
     * @param id 레시피 ID
     * @return 레시피 상세 정보
     * @throws NotFoundException 레시피를 찾을 수 없을 때
     */
    public RecipeDetail getRecipe(long id) throws NotFoundException {
        return rr.findDetailById(id)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "id"));
    }

    /**
     * 레시피 생성
     *
     * @param recipe 레시피 정보
     * @return 생성된 레시피
     */
    public Recipe createRecipe(Recipe recipe) {
        return rr.save(recipe);
    }

    /**
     * 레시피 수정
     *
     * @param recipeId      레시피 ID
     * @param currentUserId 현재 사용자 ID
     * @param updater       레시피 업데이트 함수
     * @throws NotFoundException  레시피를 찾을 수 없을 때
     * @throws ForbiddenException 레시피 작성자가 아닐 때
     */
    @Transactional
    public void updateRecipe(long recipeId, long currentUserId, Consumer<Recipe> updater) throws NotFoundException, ForbiddenException {
        Recipe recipe = rr.findById(recipeId)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "id"));

        if (recipe.getMember().getId() != currentUserId) {
            throw new ForbiddenException("본인의 레시피만 수정할 수 있습니다", "id");
        }

        updater.accept(recipe);
    }

    /**
     * 레시피 조회수 증가
     *
     * @param recipeId 레시피 ID
     * @throws NotFoundException 레시피를 찾을 수 없을 때
     */
    @Transactional
    public void incrementRecipeViewCount(long recipeId) throws NotFoundException {
        Recipe recipe = rr.findById(recipeId)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "id"));

        recipe.setViewCount(recipe.getViewCount() + 1);
        rr.save(recipe);
    }

    /**
     * 레시피 삭제
     *
     * @param recipeId 레시피 ID
     * @param member   현재 사용자 ID
     * @throws NotFoundException  레시피를 찾을 수 없을 때
     * @throws ForbiddenException 관리자나 레시피 작성자가 아닐 때
     */
    public void deleteRecipe(long recipeId, Member member) throws NotFoundException, ForbiddenException {
        Recipe recipe = rr.findById(recipeId)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "recipeId"));

        if (member.getRole() != Member.Role.ROLE_ADMIN && !Objects.equals(recipe.getMember().getId(), member.getId())) {
            throw new ForbiddenException("본인의 레시피만 삭제할 수 있습니다", "recipeId");
        }

        rr.deleteById(recipeId);
    }


    /**
     * 찜한 레시피 목록 조회
     *
     * @param member   회원 정보
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 레시피 목록
     */
    public Page<RecipeSummary> getFavoriteRecipes(Member member, Pageable pageable) {
        return rr.findByFavoriteByMembersContains(member, pageable);
    }

    /**
     * 레시피 찜하기 생성
     *
     * @param recipeId 레시피 ID
     * @param member   회원 정보
     * @throws NotFoundException 레시피를 찾을 수 없을 때
     */
    @Transactional(rollbackOn = Exception.class)
    public void createFavoriteRecipe(long recipeId, Member member) {
        Recipe recipe = rr.findById(recipeId)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "recipeId"));

        member.getFavoriteRecipes().add(recipe);
    }

    /**
     * 레시피 찜하기 삭제
     *
     * @param recipeId 레시피 ID
     * @param member   회원 정보
     * @throws NotFoundException 레시피를 찾을 수 없을 때
     */
    @Transactional(rollbackOn = Exception.class)
    public void deleteFavoriteRecipe(long recipeId, Member member) {
        Recipe recipe = rr.findById(recipeId)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "recipeId"));

        member.getFavoriteRecipes().remove(recipe);
    }


    /**
     * 레시피 댓글 목록 조회
     *
     * @param recipeId 레시피 ID
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 댓글 목록
     */
    public Page<CommentSummary> getRecipeComments(long recipeId, Pageable pageable) {
        return cr.findByRecipeId(pageable, recipeId);
    }

    /**
     * 회원의 레시피 댓글 목록 조회
     *
     * @param memberId 회원 ID
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 댓글 목록
     */
    public Page<CommentSummary> getRecipeCommentsByMemberId(long memberId, Pageable pageable) {
        return cr.findAllByMember_Id(pageable, memberId);
    }

    /**
     * 레시피 댓글 생성
     *
     * @param recipeId 레시피 ID
     * @param comment  댓글 정보
     * @return 생성된 댓글
     * @throws NotFoundException 레시피를 찾을 수 없을 때
     */
    public Recipe.Comment createRecipeComment(long recipeId, Recipe.Comment comment) throws NotFoundException {
        Recipe recipe = rr.findById(recipeId)
                .orElseThrow(() -> new NotFoundException("레시피를 찾을 수 없습니다", "recipeId"));

        comment.setRecipe(recipe);
        return cr.save(comment);
    }

    /**
     * 레시피 댓글 수정
     *
     * @param commentId 댓글 ID
     * @param memberId  회원 ID
     * @param updater   댓글 업데이트 함수
     * @throws NotFoundException  댓글을 찾을 수 없을 때
     * @throws ForbiddenException 댓글 작성자가 아닐 때
     */
    @Transactional(rollbackOn = Exception.class)
    public void updateRecipeComment(long commentId, long memberId, Consumer<Recipe.Comment> updater) throws NotFoundException, ForbiddenException {
        Recipe.Comment comment = cr.findById(commentId)
                .orElseThrow(() -> new NotFoundException("댓글을 찾을 수 없습니다", "commentId"));

        if (comment.getMember().getId() != memberId) {
            throw new ForbiddenException("본인의 댓글만 수정할 수 있습니다", "commentId");
        }

        updater.accept(comment);
    }

    /**
     * 레시피 댓글 삭제
     *
     * @param commentId 댓글 ID
     * @throws NotFoundException  댓글을 찾을 수 없을 때
     * @throws ForbiddenException 관리자나 댓글 작성자가 아닐 때
     */
    public void deleteRecipeComment(long commentId, Member member) throws NotFoundException, ForbiddenException {
        Recipe.Comment comment = cr.findById(commentId)
                .orElseThrow(() -> new NotFoundException("댓글을 찾을 수 없습니다", "commentId"));

        if (member.getRole() != Member.Role.ROLE_ADMIN && !Objects.equals(comment.getMember().getId(), member.getId())) {
            throw new ForbiddenException("본인의 댓글만 삭제할 수 있습니다", "commentId");
        }

        cr.delete(comment);
    }

}
