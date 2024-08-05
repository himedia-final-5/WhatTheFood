package today.wtfood.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import today.wtfood.server.dto.inquiry.InquiryDetail;
import today.wtfood.server.dto.inquiry.InquirySummary;
import today.wtfood.server.entity.Inquiry;

import java.util.Optional;

public interface InquiryRepository extends JpaRepository<Inquiry, Long> {

    Page<InquirySummary> findAllByEmail(String email, Pageable pageable);

    Optional<InquiryDetail> findDetailById(Long id);

}
