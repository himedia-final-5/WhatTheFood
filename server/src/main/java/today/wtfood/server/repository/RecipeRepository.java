package today.wtfood.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import today.wtfood.server.dto.recipe.RecipeDetail;
import today.wtfood.server.dto.recipe.RecipeSummary;
import today.wtfood.server.entity.Member;
import today.wtfood.server.entity.Recipe;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;
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
    @Query("SELECT r FROM Recipe r WHERE " +
            "(:title IS NULL OR r.title LIKE %:title%) AND " +
            "(:category IS NULL OR r.category LIKE %:category%) AND " +
            "(:description IS NULL OR r.description LIKE %:description%) AND " +
            "(:hashtag IS NULL OR :hashtag MEMBER OF r.tags)")
    Page<Recipe> searchRecipes(
            @Param("title") String title,
            @Param("category") String category,
            @Param("description") String description,
            @Param("hashtag") String hashtag,
            Pageable pageable
    );

    // 찜하기목록
    Page<RecipeSummary> findByFavoriteByMembersContains(Member member, Pageable pageable);

    Page<RecipeSummary> findByCategory(String category, Pageable pageable);

    List<Recipe> findByFavoriteByMembersContains(Member member);

    @Query("SELECT r.member.id AS memberId, SUM(r.viewCount) AS totalViews " +
            "FROM Recipe r " +
            "WHERE r.createdDate BETWEEN :startDate AND :endDate " +
            "GROUP BY r.member.id " +
            "ORDER BY totalViews DESC")
    List<Map<String, Object>> findTotalViewsByMember(@Param("startDate") Timestamp startDate,
                                                     @Param("endDate") Timestamp endDate);

  
}
