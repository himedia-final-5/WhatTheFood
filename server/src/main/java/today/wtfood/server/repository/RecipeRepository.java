package today.wtfood.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Repository;
import today.wtfood.server.dto.recipe.RecipeDetail;
import today.wtfood.server.dto.recipe.RecipeSummary;
import today.wtfood.server.dto.recipe.RecipeSummaryWithFavorite;
import today.wtfood.server.entity.Recipe;
import today.wtfood.server.entity.member.Member;

import java.sql.Timestamp;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@Repository
public interface RecipeRepository extends JpaRepository<Recipe, Long>, JpaSpecificationExecutor<Recipe> {

    /**
     * 레시피를 조회합니다.
     *
     * @param pageable      페이지네이션 정보
     * @param category      카테고리 (null 허용)
     * @param memberId      회원 ID (null 허용)
     * @param username      회원 이름 (null 허용)
     * @param currentUserId 현재 사용자 ID (null 허용), 목록에 표시할 레시피의 찜하기 여부를 확인하기 위해 사용합니다.
     * @return 페이지네이션된 레시피 목록
     */
    @Query("""
            SELECT r.id as id,
                r.title as title,
                r.bannerImage as bannerImage,
                r.viewCount as viewCount,
                r.cookingTime as cookingTime,
                r.servings as servings,
                r.level as level,
                r.category as category,
                r.createdDate as createdDate,
                r.member as member,
                CASE
                    WHEN :currentUserId IS NOT NULL AND (
                        SELECT COUNT(sub)
                        FROM r.favoriteByMembers sub
                        WHERE sub.id = :currentUserId
                    ) > 0
                   THEN true
                   ELSE false
                END AS favorite
            FROM Recipe r
            WHERE (:category IS NULL OR :category = '' OR r.category = :category)
            AND (:memberId IS NULL OR r.member.id = :memberId)
            AND (:username IS NULL OR :username = '' OR r.member.username = :username)
            AND (:term IS NULL OR r.title LIKE %:term% OR r.category LIKE %:term% OR r.description LIKE %:term% OR :term MEMBER OF r.tags)
            """)
    Page<RecipeSummaryWithFavorite> findAllBy(
            Pageable pageable,

            @Nullable @Param("category") String category,
            @Nullable @Param("memberId") Long memberId,
            @Nullable @Param("username") String username,
            @Nullable @Param("term") String term,
            @Nullable @Param("currentUserId") Long currentUserId
    );

    Optional<RecipeDetail> findDetailById(long id);

    // 찜하기목록
    Page<RecipeSummary> findByFavoriteByMembersContains(Member member, Pageable pageable);


    @Query("SELECT m.id AS memberId, m.profileImage AS profileImage, m.nickname AS nickname, m.role AS role, COALESCE(SUM(r.viewCount), 0) AS totalViews " +
           "FROM Member m " +
           "LEFT JOIN Recipe r ON m.id = r.member.id " +
           "WHERE r.createdDate BETWEEN :startDate AND :endDate " +
           "GROUP BY m.id, m.profileImage, m.nickname, m.role " +
           "ORDER BY totalViews DESC")
    List<Map<String, Object>> findTotalViewsByMember(
            @Param("startDate")
            Timestamp startDate,

            @Param("endDate")
            Timestamp endDate
    );

}
