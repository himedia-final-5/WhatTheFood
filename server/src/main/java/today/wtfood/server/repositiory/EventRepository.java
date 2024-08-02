package today.wtfood.server.repositiory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import today.wtfood.server.entity.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
}
