package today.wtfood.server.service;
import jakarta.transaction.Transactional;
import org.springframework.data.domain.Sort;
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

    // 이벤트 저장
    public Event saveEvent(Event event) {
        return er.save(event);
    }

    // 이벤트 생성
    public Event createEvent(Event event) {
        return er.save(event);
    }

    //이벤트 리스트 조회(키워드)
    public List<Event> getEventList(String keyword) {
        if (keyword == null || keyword.isEmpty()) {
            return er.findAll(Sort.by(Sort.Direction.DESC, "id"));
        } else {
            return er.findByTitleContaining(keyword);
            // 키워드로 필터링하는 메소드 호출
        }
    }

    // 모든 이벤트 조회
    public List<Event> getEventList() {
        return er.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    // ID로 이벤트 조회
    public Optional<Event> getEventById(int id) {
        return er.findById(id);
    }

    // 이벤트 수정
    public Event updateEvent(int id, Event event) {
        if (er.existsById(id)) {
            event.setId(id);  // 이벤트의 ID를 설정합니다.
            return er.save(event);  // 이벤트를 저장하고 반환합니다.
        } else {
            throw new RuntimeException("Event not found with id " + id);
            // ID가 없으면 예외를 발생시킵니다.
        }
    }

    // 이벤트 삭제
    public void deleteEvent(int id) {
        if (er.existsById(id)) {
            er.deleteById(id);
        } else {
            throw new RuntimeException("Event not found with id " + id);
        }
    }
}

