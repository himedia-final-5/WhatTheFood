package today.wtfood.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import today.wtfood.server.dto.recipe.RecipeDetail;
import today.wtfood.server.dto.recipe.RecipeSummary;
import today.wtfood.server.entity.Member;
import today.wtfood.server.entity.Recipe;

import java.util.List;
import java.util.Optional;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long>, JpaSpecificationExecutor<Recipe> {

    /**
     * 페이지네이션을 적용하여 모든 레시피를 조회합니다.
     */
    Page<RecipeSummary> findAllBy(Pageable pageable);

    Optional<RecipeDetail> findDetailById(long id);

    /**
     * 제목으로 레시피를 검색합니다.
     *
     * @param title    제목
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 레시피 목록
     */
    Page<Recipe> findByTitle(String title, Pageable pageable);

    /**
     * 설명으로 레시피를 검색합니다.
     *
     * @param description 설명
     * @param pageable    페이지네이션 정보
     * @return 페이지네이션된 레시피 목록
     */
    Page<Recipe> findByDescription(String description, Pageable pageable);

    /**
     * 제목과 설명으로 레시피를 검색합니다.
     *
     * @param title       제목
     * @param description 설명
     * @param pageable    페이지네이션 정보
     * @return 페이지네이션된 레시피 목록
     */
    Page<Recipe> findByTitleAndDescription(String title, String description, Pageable pageable);

    // 찜하기목록
    List<Recipe> findByFavoriteByMembersContains(Member member);
}
