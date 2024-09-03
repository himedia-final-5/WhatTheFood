package today.wtfood.server.controller;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.GeneratedId;
import today.wtfood.server.dto.PageResponse;
import today.wtfood.server.dto.recipe.*;
import today.wtfood.server.entity.Recipe;
import today.wtfood.server.entity.member.Member;
import today.wtfood.server.exception.BadRequestException;
import today.wtfood.server.security.annotation.CurrentUser;
import today.wtfood.server.service.RecipeService;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    private final RecipeService rs;

    public RecipeController(RecipeService rs) {
        this.rs = rs;
    }

    /**
     * 레시피 목록 조회
     *
     * @param pageable      페이지네이션 정보
     * @param category      카테고리
     * @param memberId      회원 ID
     * @param username      회원 이름
     * @param term          검색어
     * @param currentUserId 현재 회원 ID
     * @return 페이지네이션된 레시피 목록
     */
    @GetMapping("")
    @PreAuthorize("permitAll()")
    public PageResponse<RecipeSummaryWithFavorite> getRecipes(
            @PageableDefault(sort = "id", direction = Sort.Direction.DESC)
            Pageable pageable,
            @RequestParam(value = "category", required = false)
            String category,
            @RequestParam(value = "memberId", required = false)
            Long memberId,
            @RequestParam(value = "username", required = false)
            String username,
            @RequestParam(value = "term", required = false)
            String term,

            @Nullable
            @CurrentUser
            Long currentUserId
    ) {
        return PageResponse.of(rs.getRecipes(pageable, category, memberId, username, term, currentUserId));
    }

    /**
     * 레시피 조회
     *
     * @param recipeId 레시피 ID
     * @return 레시피 상세 정보
     */
    @GetMapping("/{recipe-id}")
    @PreAuthorize("permitAll()")
    public RecipeDetail getRecipe(@PathVariable("recipe-id") long recipeId) {
        return rs.getRecipe(recipeId);
    }

    /**
     * 레시피 생성
     *
     * @param recipeDto     레시피 정보
     * @param currentMember 현재 회원 엔티티
     * @return 생성된 레시피 ID
     */
    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_USER')")
    public GeneratedId<Long> createRecipe(
            @RequestBody
            RecipeDto recipeDto,

            @CurrentUser
            Member currentMember
    ) {
        return GeneratedId.of(rs.createRecipe(recipeDto.apply(new Recipe(), currentMember)).getId());
    }

    /**
     * 레시피 수정
     *
     * @param recipeId      레시피 ID
     * @param recipeDto     레시피 정보
     * @param currentUserId 현재 회원 ID
     */
    @PostMapping("/{recipe-id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateRecipe(
            @PathVariable("recipe-id")
            long recipeId,
            @RequestBody
            RecipeDto recipeDto,

            @CurrentUser
            long currentUserId
    ) {
        rs.updateRecipe(recipeId, currentUserId, recipeDto::apply);
    }

    /**
     * 레시피 조회수 증가
     *
     * @param recipeId 레시피 ID
     */
    @PutMapping("{recipe-id}/view-count")
    public void incrementRecipeViewCount(@PathVariable("recipe-id") long recipeId) {
        rs.incrementRecipeViewCount(recipeId);
    }

    /**
     * 레시피 삭제
     *
     * @param recipeId      레시피 ID
     * @param currentMember 현재 회원 엔티티
     */
    @DeleteMapping("/{recipe-id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteRecipe(
            @PathVariable("recipe-id")
            long recipeId,

            @CurrentUser
            Member currentMember
    ) {
        rs.deleteRecipe(recipeId, currentMember);
    }

    /**
     * 레시피 찜하기 목록 조회
     *
     * @param pageable      페이지네이션 정보
     * @param currentMember 현재 회원 엔티티
     */
    @GetMapping("/favorites")
    @PreAuthorize("hasRole('ROLE_USER')")
    public PageResponse<RecipeSummary> getFavoriteRecipes(
            Pageable pageable,

            @CurrentUser
            Member currentMember
    ) {
        return PageResponse.of(rs.getFavoriteRecipes(currentMember, pageable));
    }

    /**
     * 레시피 찜하기 여부 확인
     *
     * @param recipeId      레시피 ID
     * @param currentMember 현재 회원 엔티티
     * @return 찜하기 여부
     */
    @GetMapping("/{recipe-id}/favorite")
    @PreAuthorize("hasRole('ROLE_USER')")
    public boolean isFavoriteRecipe(
            @PathVariable("recipe-id")
            long recipeId,

            @CurrentUser
            Member currentMember
    ) {
        return rs.isFavoriteRecipe(recipeId, currentMember);
    }

    /**
     * 레시피 찜하기 추가
     *
     * @param recipeId      레시피 ID
     * @param currentMember 현재 회원 엔티티
     */
    @PostMapping("/{recipe-id}/favorite")
    @PreAuthorize("hasRole('ROLE_USER')")
    public void createFavoriteRecipe(
            @PathVariable("recipe-id")
            long recipeId,

            @CurrentUser
            Member currentMember
    ) {
        rs.createFavoriteRecipe(recipeId, currentMember);
    }

    /**
     * 레시피 찜하기 삭제
     *
     * @param recipeId      레시피 ID
     * @param currentMember 현재 회원 엔티티
     */
    @DeleteMapping("/{recipe-id}/favorite")
    @PreAuthorize("hasRole('ROLE_USER')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFavoriteRecipe(
            @PathVariable("recipe-id")
            long recipeId,

            @CurrentUser
            Member currentMember
    ) {
        rs.deleteFavoriteRecipe(recipeId, currentMember);
    }

    /**
     * 레시피 댓글 목록 조회
     *
     * @param memberId 회원 ID
     * @param recipeId 레시피 ID
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 댓글 목록
     */
    @GetMapping("/comments")
    @PreAuthorize("permitAll()")
    public PageResponse<CommentSummary> getRecipeComments(
            @RequestParam(value = "memberId", required = false)
            Long memberId,
            @RequestParam(value = "recipeId", required = false)
            Long recipeId,
            Pageable pageable
    ) {
        if (memberId != null) {
            return PageResponse.of(rs.getRecipeCommentsByMemberId(memberId, pageable));
        } else if (recipeId != null) {
            return PageResponse.of(rs.getRecipeComments(recipeId, pageable));
        } else {
            throw new BadRequestException("memberId 또는 recipeId 중 하나는 필수입니다.");
        }
    }

    /**
     * 레시피 댓글 추가
     *
     * @param commentDto    댓글 정보
     * @param currentMember 현재 회원 엔티티
     * @return 빈 응답
     */
    @PostMapping("/comments")
    @PreAuthorize("hasRole('ROLE_USER')")
    public GeneratedId<Long> createRecipeComment(
            @RequestBody
            CommentDto commentDto,

            @CurrentUser
            Member currentMember
    ) {
        return GeneratedId.of(rs.createRecipeComment(
                commentDto.recipeId(),
                commentDto.apply(new Recipe.Comment(), currentMember)
        ).getId());
    }

    /**
     * 레시피 댓글 수정
     *
     * @param commentId     댓글 ID
     * @param commentDto    댓글 정보
     * @param currentUserId 현재 회원 ID
     */
    @PostMapping("/comments/{comment-id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public void updateRecipeComment(
            @PathVariable("comment-id")
            long commentId,
            @RequestBody
            CommentDto commentDto,

            @CurrentUser
            long currentUserId
    ) {
        rs.updateRecipeComment(commentId, currentUserId, commentDto::apply);
    }

    /**
     * 레시피 댓글 삭제
     *
     * @param commentId     댓글 ID
     * @param currentMember 현재 회원 엔티티
     */
    @DeleteMapping("/comments/{comment-id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public void deleteRecipeComment(
            @PathVariable("comment-id")
            long commentId,

            @CurrentUser
            Member currentMember
    ) {
        rs.deleteRecipeComment(commentId, currentMember);
    }

}
