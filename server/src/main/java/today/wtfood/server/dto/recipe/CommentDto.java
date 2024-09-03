package today.wtfood.server.dto.recipe;

import today.wtfood.server.dto.EntityDto;
import today.wtfood.server.entity.Recipe;
import today.wtfood.server.entity.member.Member;

/**
 * DTO for {@link Recipe.Comment}
 *
 * @param recipeId 레시피 ID
 * @param content  댓글 내용
 */
public record CommentDto(
        Long recipeId,
        String content
) implements EntityDto<Recipe.Comment> {

    public Recipe.Comment apply(Recipe.Comment entity) {
        entity.setContent(content);
        return entity;
    }

    public Recipe.Comment apply(Recipe.Comment entity, Member member) {
        apply(entity);
        entity.setMember(member);
        return entity;
    }

}
