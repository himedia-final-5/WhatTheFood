package today.wtfood.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
import today.wtfood.server.dto.member.MemberProfileSummary;
import today.wtfood.server.entity.member.MemberFollow;

public interface MemberFollowRepository extends JpaRepository<MemberFollow, MemberFollow.PK> {

    /**
     * 팔로우 관계가 존재하는지 확인
     *
     * @param fromMemberId 팔로우의 주체가 되는 회원의 아이디
     * @param toMemberId   팔로우의 대상이 되는 회원의 아이디
     * @return 팔로우 관계가 존재하면 true, 그렇지 않으면 false
     */
    boolean existsByFromMemberIdAndToMemberId(Long fromMemberId, Long toMemberId);

    /**
     * 팔로우 관계를 삭제
     *
     * @param fromMemberId 팔로우의 주체가 되는 회원의 아이디
     * @param toMemberId   팔로우의 대상이 되는 회원의 아이디
     */
    void deleteByFromMemberIdAndToMemberId(Long fromMemberId, Long toMemberId);

    /**
     * 팔로우의 주체가 되는 회원의 아이디로 팔로우 수 (following)를 조회
     */
    long countByFromMemberId(Long fromMemberId);

    /**
     * 팔로우의 대상이 되는 회원의 아이디로 팔로워 수 (follower)를 조회
     */
    long countByToMemberId(Long toMemberId);

    /**
     * 회원의 아이디로 팔로우 목록을 조회
     *
     * @param fromMemberId  팔로우의 주체가 되는 회원의 아이디 (null 불가)
     * @param currentUserId 현재 로그인한 회원의 아이디 (null 허용), 목록에 표시할 회원들의 팔로우 여부를 확인하기 위해 사용합니다.
     * @param pageable      페이지 정보
     * @return 팔로우 목록 (회원 아이디, 닉네임, 프로필 이미지 주소, 현재 로그인한 회원의 팔로우 여부)
     */
    @Query("""
            SELECT\s
                 f.toMember.id AS id,\s
                 f.toMember.nickname AS nickname,\s
                 f.toMember.profileImage AS profileImage,
                 CASE\s
                     WHEN :currentUserId IS NOT NULL AND (
                         SELECT COUNT(sub)
                         FROM MemberFollow sub
                         WHERE sub.fromMember.id = :currentUserId
                           AND sub.toMember.id = f.toMember.id
                     ) > 0\s
                     THEN true\s
                     ELSE false\s
                 END AS following
             FROM MemberFollow f
             WHERE f.fromMember.id = :fromMemberId""")
    Page<MemberProfileSummary> findByFromMemberId(
            @NonNull
            @Param("fromMemberId")
            Long fromMemberId,

            @Nullable
            @Param("currentUserId")
            Long currentUserId,

            @NonNull
            Pageable pageable
    );

    /**
     * 회원의 아이디로 팔로워 목록을 조회
     *
     * @param toMemberId    팔로우의 대상이 되는 회원의 아이디
     * @param currentUserId 현재 로그인한 회원의 아이디 (null 허용), 목록에 표시할 회원들의 팔로우 여부를 확인하기 위해 사용합니다.
     * @param pageable      페이지 정보
     * @return 팔로워 목록 (회원 아이디, 닉네임, 프로필 이미지 주소, 현재 로그인한 회원의 팔로우 여부)
     */
    @Query("""
            SELECT\s
                 f.fromMember.id AS id,\s
                 f.fromMember.nickname AS nickname,\s
                 f.fromMember.profileImage AS profileImage,
                 CASE\s
                     WHEN :currentUserId IS NOT NULL AND (
                         SELECT COUNT(sub)
                         FROM MemberFollow sub
                         WHERE sub.fromMember.id = :currentUserId
                           AND sub.toMember.id = f.fromMember.id
                     ) > 0\s
                     THEN true\s
                     ELSE false\s
                 END AS following
             FROM MemberFollow f
             WHERE f.toMember.id = :toMemberId""")
    Page<MemberProfileSummary> findByToMemberId(
            @NonNull
            @Param("toMemberId")
            Long toMemberId,

            @Nullable
            @Param("currentUserId")
            Long currentUserId,

            @NonNull
            Pageable pageable
    );

}
