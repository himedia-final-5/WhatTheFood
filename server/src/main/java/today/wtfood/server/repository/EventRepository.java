package today.wtfood.server.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import today.wtfood.server.dto.event.EventDetail;
import today.wtfood.server.dto.event.EventSummary;
import today.wtfood.server.entity.Event;

import java.util.Optional;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {

    Page<EventSummary> findAllBy(Pageable pageable);

    Optional<EventDetail> findDetailById(long id);

}
