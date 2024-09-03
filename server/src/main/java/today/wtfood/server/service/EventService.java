package today.wtfood.server.service;

import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.event.EventDetail;
import today.wtfood.server.dto.event.EventSummary;
import today.wtfood.server.entity.Event;
import today.wtfood.server.exception.NotFoundException;
import today.wtfood.server.repository.EventRepository;

import java.util.function.Consumer;

@Service
@Transactional
public class EventService {

    private final EventRepository er;

    public EventService(EventRepository er) {
        this.er = er;
    }

    /**
     * 이벤트 목록 조회
     *
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 이벤트 목록
     */
    public Page<EventSummary> getEvents(Pageable pageable) {
        return er.findAllBy(pageable);
    }

    /**
     * 이벤트 조회
     *
     * @param eventId 이벤트 ID
     * @return 이벤트 상세 정보
     * @throws NotFoundException 이벤트를 찾을 수 없는 경우
     */
    public EventDetail getEventById(long eventId) throws NotFoundException {
        return er.findDetailById(eventId)
                .orElseThrow(() -> new NotFoundException("이벤트를 찾을 수 없습니다", "id"));
    }

    /**
     * 이벤트 생성
     *
     * @param event 이벤트 정보
     * @return 생성된 이벤트
     */
    public Event createEvent(Event event) {
        return er.save(event);
    }

    /**
     * 이벤트 생성
     *
     * @param eventId 이벤트 ID
     * @param updater 이벤트 정보 업데이트 함수
     * @throws NotFoundException 이벤트를 찾을 수 없는 경우
     */
    @Transactional
    public void updateEvent(long eventId, Consumer<Event> updater) throws NotFoundException {
        Event event = er.findById(eventId)
                .orElseThrow(() -> new NotFoundException("이벤트를 찾을 수 없습니다", "id"));

        updater.accept(event);
    }

    /**
     * 이벤트 삭제
     *
     * @param eventId 이벤트 ID
     * @throws NotFoundException 이벤트를 찾을 수 없는 경우
     */
    public void deleteEvent(long eventId) throws NotFoundException {
        if (!er.existsById(eventId)) {
            throw new NotFoundException("이벤트를 찾을 수 없습니다", "id");
        }

        er.deleteById(eventId);
    }

}
