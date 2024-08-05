package today.wtfood.server.controller;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import today.wtfood.server.dto.event.EventDetail;
import today.wtfood.server.dto.event.EventDto;
import today.wtfood.server.dto.event.EventSummary;
import today.wtfood.server.entity.Event;
import today.wtfood.server.service.EventService;

import java.util.HashMap;

@RestController
@RequestMapping("/events")
public class EventController {

    private final EventService es;

    public EventController(EventService es) {
        this.es = es;
    }

    // 이벤트 리스트 //이벤트번호(id)
    @GetMapping("/{id}")
    public EventDetail getEvent(@PathVariable("id") long id) {
        return es.getEventById(id);
    }

    // 이벤트리스트(페이징)
    @GetMapping("/")
    public Page<EventSummary> getEventList(
            @RequestParam(value = "pageNumber", defaultValue = "0")
            int pageNumber,

            @RequestParam(value = "pageSize", defaultValue = "0")
            int pageSize
    ) {
        PageRequest pageRequest = PageRequest.of(pageNumber, pageSize);
        return es.getEventList(pageRequest);
    }

    //이벤트 수정 //수정생성용 Dto사용
    @PostMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateEvent(@PathVariable("id") long id, @RequestBody EventDto event) {
        try {
            es.updateEvent(id, event); //성공
            return;
        } catch (RuntimeException e) { //에러
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    // 이벤트 삭제
    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEvent(@PathVariable("id") long id) {
        try {
            es.deleteEvent(id); //삭제
            return;
        } catch (RuntimeException e) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, e.getMessage());
        }
    }

    // 새로운 이벤트 생성 //수정생성용 Dto사용
    @PostMapping("/")
    public HashMap<String, Object> createEvent(@RequestBody EventDto event) {
        HashMap<String, Object> result = new HashMap<>();
        try {
            Event createdEvent = es.createEvent(event);
            result.put("status", "success");
            result.put("createdEvent", createdEvent);
        } catch (RuntimeException e) {
            result.put("status", "error");
            result.put("message", e.getMessage());
        }
        return result;
    }
}


