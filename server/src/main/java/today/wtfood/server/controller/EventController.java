package today.wtfood.server.controller;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import today.wtfood.server.dto.GeneratedId;
import today.wtfood.server.dto.event.EventDetail;
import today.wtfood.server.dto.event.EventDto;
import today.wtfood.server.dto.event.EventSummary;
import today.wtfood.server.service.EventService;

@RestController
@RequestMapping("/events")
public class EventController {

    private final EventService es;

    public EventController(EventService es) {
        this.es = es;
    }

    // 이벤트 리스트 //이벤트번호(id)
    @GetMapping("/{id}")
    @PreAuthorize("permitAll()")
    public EventDetail getEvent(@PathVariable("id") long id) {
        return es.getEventById(id);
    }

    // 이벤트리스트(페이징)
    @GetMapping("")
    @PreAuthorize("permitAll()")
    public Page<EventSummary> getEventList(
            @RequestParam(value = "pageNumber", defaultValue = "0")
            int pageNumber,

            @RequestParam(value = "pageSize", defaultValue = "10")
            int pageSize
    ) {
        PageRequest pageRequest = PageRequest.of(pageNumber, pageSize);
        return es.getEventList(pageRequest);
    }

    //이벤트 수정 //수정생성용 Dto사용
    @PostMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
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
    @PreAuthorize("hasRole('ROLE_ADMIN')")
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
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public GeneratedId<Long> createEvent(@RequestBody EventDto event) {
        return new GeneratedId<>(es.createEvent(event).getId());
    }

}


