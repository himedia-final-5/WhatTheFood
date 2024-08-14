package today.wtfood.server.service;

import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.event.EventDetail;
import today.wtfood.server.dto.event.EventDto;
import today.wtfood.server.dto.event.EventSummary;
import today.wtfood.server.entity.Event;
import today.wtfood.server.exception.NotFoundException;
import today.wtfood.server.repository.EventRepository;

import java.util.List;

@Service
@Transactional
public class EventService {

    private final EventRepository er;

    public EventService(EventRepository er) {
        this.er = er;
    }

    // 이벤트 생성
    public Event createEvent(EventDto event) {
        return er.save(event.toEntity());
    }

    //이벤트 리스트 조회
    public Page<EventSummary> getEventList(Pageable pageable) {
        return er.findAllBy(pageable);
    }

    // 모든 이벤트 조회
    public List<Event> getEventList() {
        return er.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    // ID로 이벤트 조회
    public EventDetail getEventById(long id) {
        return er.findDetailById(id)
                .orElseThrow(() -> new NotFoundException("이벤트를 찾을 수 없습니다", "id"));
    }

    // 이벤트 수정
    @Transactional
    public void updateEvent(long id, EventDto dto) {
        Event event = er.findById(id)
                .orElseThrow(() -> new NotFoundException("이벤트를 찾을 수 없습니다", "id"));
        event.setTitle(dto.getTitle());
        event.setContentImages(dto.getContentImages());
        event.setStartDate(dto.getStartDate());
        event.setEndDate(dto.getEndDate());
        event.setBannerImage(dto.getBannerImage());
    }

    // 이벤트 삭제
    public void deleteEvent(long id) {
        if (!er.existsById(id)) {
            throw new NotFoundException("이벤트를 찾을 수 없습니다", "id");
        }

        er.deleteById(id);
    }
}

