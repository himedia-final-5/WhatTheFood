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
import today.wtfood.server.repositiory.EventRepository;

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

    //이벤트 리스트 조회(키워드)
    public Page<EventSummary> getEventList(Pageable pageable) {
        return er.findAllSummary(pageable);
    }

    // 모든 이벤트 조회
    public List<Event> getEventList() {
        return er.findAll(Sort.by(Sort.Direction.DESC, "id"));
    }

    // ID로 이벤트 조회
    public EventDetail getEventById(int id) {
        return er.findEventDetailById(id)
                .orElseThrow(() -> new RuntimeException("Event with id " + id + " not found"));
    }

    // 이벤트 수정
    @Transactional
    public void updateEvent(int id, EventDto dto) {
        Event event = er.findById(id)
                .orElseThrow(() -> new RuntimeException("Event with id " + id + " not found"));
        event.setTitle(dto.getTitle());
        event.setContent(dto.getContent());
        event.setStartDate(dto.getStartDate());
        event.setEndDate(dto.getEndDate());
        event.setImageUrl(dto.getImageUrl());
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

