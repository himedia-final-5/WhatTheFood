package today.wtfood.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import today.wtfood.server.dto.member.MemberProfileDetail;
import today.wtfood.server.dto.member.MemberRankingSummary;
import today.wtfood.server.dto.member.MemberSummary;
import today.wtfood.server.entity.member.Member;

import java.sql.Timestamp;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long>, JpaSpecificationExecutor<Member> {

    <T> Page<T> findAllBy(Pageable pageable, Class<T> projectionType);

    @Query("SELECT m.id AS id, m.profileImage AS profileImage, m.nickname AS nickname, COALESCE(SUM(r.viewCount), 0) AS viewCount " +
           "FROM Member m " +
           "LEFT JOIN Recipe r ON m.id = r.member.id " +
           "WHERE r.createdDate BETWEEN :startDate AND :endDate AND m.role = 'ROLE_CHEF'" +
           "GROUP BY m.id, m.profileImage, m.nickname " +
           "ORDER BY viewCount DESC")
    Page<MemberRankingSummary> findAllOrderByTotalViews(
            @Param("startDate")
            Timestamp startDate,
            @Param("endDate")
            Timestamp endDate,
            Pageable pageable
    );

    <T> Optional<T> findByUsername(String username, Class<T> projectionType);

    Optional<Member> findMemberByGoogleOauthId(String googleOauthId);

    Optional<Member> findMemberByNaverOauthId(String naverOauthId);

    Optional<Member> findMemberByKakaoOauthId(String kakaoOauthId);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    <T> Optional<T> findGenericById(long id, Class<T> projectionType);

    Page<MemberSummary> findAllByUsername(String username, Pageable pageable);

    <T> Page<T> findByRole(Member.Role role, Pageable pageable, Class<T> memberAdminClass);

    /**
     * 회원 프로필 조회
     *
     * @param memberId      조회할 회원의 아이디 (null 불가)
     * @param currentUserId 현재 로그인한 회원의 아이디 (null 허용), 목록에 표시할 회원들의 팔로우 여부를 확인하기 위해 사용합니다.
     * @return 회원 프로필 (닉네임, 소개, 프로필 이미지 주소, 배너 이미지 주소, 팔로워 수, 팔로잉 수, 조회수, 현재 로그인한 회원의 팔로우 여부)
     */
    @Query("""
            SELECT m.id AS id,\s
                   m.role AS role,\s
                   m.nickname AS nickname,\s
                   m.introduce AS introduce,\s
                   m.profileImage AS profileImage,\s
                   m.bannerImage AS bannerImage,\s
                   (SELECT COUNT(f) FROM MemberFollow f WHERE f.toMemberId = m.id) AS followerCount,\s
                   (SELECT COUNT(f) FROM MemberFollow f WHERE f.fromMemberId = m.id) AS followingCount,\s
                   COALESCE((SELECT SUM(recipe.viewCount) FROM Recipe recipe WHERE recipe.member.id = m.id), 0) AS viewCount,\s
                   CASE\s
                     WHEN :currentUserId IS NOT NULL AND (
                         SELECT COUNT(sub)
                         FROM MemberFollow sub
                         WHERE sub.fromMember.id = :currentUserId
                           AND sub.toMember.id = :memberId
                     ) > 0\s
                     THEN true\s
                     ELSE false\s
                 END AS following\s
            FROM Member m WHERE m.id = :memberId
            """)
    Optional<MemberProfileDetail> findProfileById(
            @Param("memberId")
            long memberId,

            @Param("currentUserId")
            Long currentUserId
    );

}
