package today.wtfood.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import today.wtfood.server.entity.Member;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long>, JpaSpecificationExecutor<Member> {

    @Query("SELECT m FROM Member m")
    <T> Page<T> findAll(Pageable pageable, Class<T> projectionType);

    @Query("SELECT m FROM Member m WHERE m.id = :id")
    <T> Optional<T> findById(long id, Class<T> projectionType);

}