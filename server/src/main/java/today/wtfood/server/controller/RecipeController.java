package today.wtfood.server.controller;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.GeneratedId;
import today.wtfood.server.dto.PageResponse;
import today.wtfood.server.dto.recipe.*;
import today.wtfood.server.security.annotation.CurrentUser;
import today.wtfood.server.service.RecipeService;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public PageResponse<RecipeSummaryWithFavorite> getRecipeList(
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

    // 레시피 리스트 //레시피번호(id)
    @GetMapping("/{id}")
    @PreAuthorize("permitAll()")
    public RecipeDetail getRecipeById(@PathVariable("id") long id) {
        return rs.getRecipeById(id);
    }

    //조회수
    @PutMapping("{id}/incrementViewCount")
    public void incrementViewCount(@PathVariable long id) {
        rs.incrementViewCount(id);
    }

    // 레시피 수정
    @PostMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateRecipe(@PathVariable("id") long id, @RequestBody RecipeDto recipedto) {
        rs.updateRecipe(id, recipedto);
    }

    // 레시피 삭제
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteRecipe(@PathVariable("id") long id) {
        rs.deleteRecipe(id);
    }

    // 새로운 레시피 생성
    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_USER')")
    public GeneratedId<Long> createRecipe(
            @RequestBody
            RecipeDto recipedto,

            @CurrentUser
            long memberId
    ) {
        // memberId를 사용하여 레시피 생성
        return GeneratedId.of(rs.createRecipe(recipedto, memberId).getId());
    }

    // 찜한 레시피 목록 조회 (페이지네이션 추가)
    @GetMapping("/favorites")
    @PreAuthorize("hasRole('ROLE_USER')")
    public PageResponse<RecipeSummary> getFavoriteRecipes(
            Pageable pageable,

            @CurrentUser
            Long currentMemberId
    ) {
        return PageResponse.of(rs.getFavoriteRecipes(currentMemberId, pageable));
    }

    // 레시피 찜하기
    @PostMapping("/{recipeId}/favorite")
    @PreAuthorize("hasRole('ROLE_USER')")
    public void addFavoriteRecipe(
            @PathVariable
            long recipeId,

            @CurrentUser
            long memberId
    ) {
        rs.addFavoriteRecipe(memberId, recipeId);
    }

    // 찜하기 취소
    @DeleteMapping("/{recipeId}/favorite")
    @PreAuthorize("hasRole('ROLE_USER')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteFavoriteRecipe(
            @PathVariable
            long recipeId,

            @CurrentUser
            long memberId
    ) {
        rs.deleteFavoriteRecipe(memberId, recipeId);
    }

    @GetMapping("/view")
    public ResponseEntity<List<Map<String, Object>>> getRanking(@RequestParam(value="period",defaultValue = "d") String period) {
        List<Map<String, Object>> rankings;

        switch (period.toLowerCase()) {
            case "d":
                rankings = rs.getDailyViewsRanking();
                break;
            case "w":
                rankings = rs.getWeeklyViewsRanking();
                break;
            case "m":
                rankings = rs.getMonthlyViewsRanking();
                break;
            default:
                return ResponseEntity.badRequest().body(List.of(Map.of("error", "Invalid period specified")));
        }

        return ResponseEntity.ok(rankings);

    }

    // 댓글 가져오기
    @GetMapping("/comments")
    @PreAuthorize("permitAll()")
    public PageResponse<CommentSummary> getCommentsList(
            @RequestParam(value = "recipeId", required = false)
            Long recipeId,
            @RequestParam(value = "memberId", required = false)
            Long memberId,
            Pageable pageable
    ) {
        if (recipeId != null) {
            return PageResponse.of(rs.getCommentsList(recipeId, pageable));
        } else if (memberId != null) {
            return PageResponse.of(rs.getCommentsListOfMember(memberId, pageable));
        } else {
            throw new BadRequestException("recipeId 또는 memberId 중 하나는 필수입니다.");
        }
    }

    // 댓글 가져오기
    @GetMapping("/{recipeId}/comments")
    @PreAuthorize("permitAll()")
    public PageResponse<CommentSummary> getCommentsList(@PathVariable long recipeId, Pageable pageable) {
        return PageResponse.of(rs.getCommentsList(recipeId, pageable));
    }

    // 댓글 추가
    @PostMapping("/{recipeId}/addComment")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<HashMap<String, Object>> addComment(
            @PathVariable
            long recipeId,
            @RequestBody
            CommentDto commentDto,

            @CurrentUser
            long memberId
    ) {

        rs.addComment(commentDto, recipeId, memberId);

        HashMap<String, Object> response = new HashMap<>();

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    // 댓글 수정
    @PutMapping("/{commentId}/editComment")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<String> updateComment(
            @PathVariable
            long commentId,
            @RequestBody
            CommentDto commentDto,

            @CurrentUser
            long memberId
    ) {
        rs.updateComment(commentId, commentDto);
        return ResponseEntity.ok("Comment updated successfully");
    }

    // 댓글 삭제
    @DeleteMapping("/{commentId}/deleteComment")
    @PreAuthorize("hasRole('ROLE_USER')")
    public ResponseEntity<String> deleteComment(
            @PathVariable
            long commentId,

            @CurrentUser
            long memberId
    ) {
        rs.deleteComment(commentId);
        return ResponseEntity.ok("Comment deleted successfully");
    }

}
