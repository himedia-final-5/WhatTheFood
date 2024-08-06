package today.wtfood.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import today.wtfood.server.entity.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long>, JpaSpecificationExecutor<Member> {

    <T> Page<T> findAllBy(Pageable pageable, Class<T> projectionType);

    Optional<Member> findByUsername(String username);

    <T> Optional<T> findGenericById(long id, Class<T> projectionType);

}