package today.wtfood.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import today.wtfood.server.dto.notice.NoticeDetail;
import today.wtfood.server.dto.notice.NoticeSummary;
import today.wtfood.server.entity.Notice;

import java.util.Optional;

@Repository
public interface NoticeRepository extends JpaRepository<Notice, Long> {

    Page<NoticeSummary> findAllBy(Pageable pageable);

    Optional<NoticeDetail> findDetailById(long id);

}
