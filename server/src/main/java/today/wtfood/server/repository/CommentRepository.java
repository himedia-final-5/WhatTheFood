package today.wtfood.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import today.wtfood.server.dto.recipe.CommentSummary;
import today.wtfood.server.entity.Recipe;

public interface CommentRepository extends JpaRepository<Recipe.Comment, Long> {

    Page<CommentSummary> findByRecipeIdOrderByIdDesc(Pageable pageable, long recipeId);

    Page<CommentSummary> findAllByMember_IdOrderByCreatedDateDesc(Pageable pageable, long memberId);

}
