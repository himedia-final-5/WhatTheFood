package today.wtfood.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import today.wtfood.server.dto.faq.FaqDetail;
import today.wtfood.server.entity.Faq;

import java.util.Optional;

@Repository
public interface FaqRepository extends JpaRepository<Faq, Long> {

    Optional<FaqDetail> findDetailById(Long id);
}
