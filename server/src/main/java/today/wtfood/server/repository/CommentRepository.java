package today.wtfood.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import today.wtfood.server.entity.Recipe;

import java.util.List;

public interface CommentRepository extends JpaRepository<Recipe.Comment, Long> {
    List<Recipe.Comment> findByRecipeIdOrderByIdDesc(long recipeId);
}
