package today.wtfood.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.stereotype.Repository;
import today.wtfood.server.dto.member.MemberSummary;
import today.wtfood.server.entity.member.Member;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long>, JpaSpecificationExecutor<Member> {

    <T> Page<T> findAllBy(Pageable pageable, Class<T> projectionType);

    <T> Optional<T> findByUsername(String username, Class<T> projectionType);

    <T> Optional<T> findByEmail(String email, Class<T> projectionType);

    Optional<Member> findMemberByGoogleOauthId(String googleOauthId);

    Optional<Member> findMemberByNaverOauthId(String naverOauthId);

    Optional<Member> findMemberByKakaoOauthId(String kakaoOauthId);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    <T> Optional<T> findGenericById(long id, Class<T> projectionType);

    Page<MemberSummary> findAllByUsername(String username, Pageable pageable);
}