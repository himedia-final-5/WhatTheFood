package today.wtfood.server.service;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import today.wtfood.server.entity.Event;
import today.wtfood.server.repositiory.EventRepository;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class EventService {

    private final EventRepository er;

    public EventService(EventRepository er) {
        this.er = er;
    }

    // 이벤트 생성
    public Event getEvent(Event event) {
        return er.save(event);
    }

    // 모든 이벤트 조회
    public List<Event> getAllEvents() {
        return er.findAll();
    }

    // ID로 이벤트 조회
    public Optional<Event> getEventById(int id) {
        return er.findById(id);
    }

    // 이벤트 수정
    public Event updateEvent(int id, Event event) {
        if (er.existsById(id)) {
            event.setId(id);
        }
        return er.save(event);
    }

    // 이벤트 삭제
    public void deleteEvent(int id) {
        if (er.existsById(id)) {
            er.deleteById(id);
        }
    }
}
