package today.wtfood.server.dto.recipe;

import lombok.Value;
import today.wtfood.server.entity.Recipe;

import java.io.Serializable;

/**
 * DTO for {@link today.wtfood.server.entity.Recipe.Comment}
 */
@Value
public class CommentDto implements Serializable {

    Long id;                // 댓글 ID
    Long recipeId;          // 댓글이 달린 레시피의 ID
    Long memberId;          // 댓글을 작성한 멤버의 ID
    String content;         // 댓글 내용


    public static CommentDto fromEntity(Recipe.Comment comment) {
        return new CommentDto(
                comment.getId(),
                comment.getRecipe().getId(),  // Recipe 엔티티에서 ID를 가져옵니다
                comment.getMember().getId(),  // Member 엔티티에서 ID를 가져옵니다
                comment.getContent()
        );
    }

    public Recipe.Comment toEntity(Recipe recipe) {
        Recipe.Comment comment = new Recipe.Comment();
        comment.setId(id);
        comment.setRecipe(recipe);

        // 멤버 정보는 다른 곳에서 설정한다고 가정
        comment.setContent(content);
        return comment;
    }
}
