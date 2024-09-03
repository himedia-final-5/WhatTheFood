package today.wtfood.server.controller;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.GeneratedId;
import today.wtfood.server.dto.PageResponse;
import today.wtfood.server.dto.event.EventDetail;
import today.wtfood.server.dto.event.EventDto;
import today.wtfood.server.dto.event.EventSummary;
import today.wtfood.server.entity.Event;
import today.wtfood.server.service.EventService;

@RestController
@RequestMapping("/events")
public class EventController {

    private final EventService es;

    public EventController(EventService es) {
        this.es = es;
    }

    /**
     * 이벤트 목록 조회
     *
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 이벤트 목록
     */
    @GetMapping("")
    @PreAuthorize("permitAll()")
    public PageResponse<EventSummary> getEvents(
            @PageableDefault(sort = "id", direction = Sort.Direction.DESC)
            Pageable pageable
    ) {
        return PageResponse.of(es.getEvents(pageable));
    }

    /**
     * 이벤트 조회
     *
     * @param eventId 이벤트 ID
     * @return 이벤트 상세 정보
     */
    @GetMapping("/{event-id}")
    @PreAuthorize("permitAll()")
    public EventDetail getEvent(@PathVariable("event-id") long eventId) {
        return es.getEventById(eventId);
    }

    /**
     * 이벤트 생성
     *
     * @param eventDto 이벤트 정보
     * @return 생성된 이벤트 ID
     */
    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public GeneratedId<Long> createEvent(@RequestBody EventDto eventDto) {
        return GeneratedId.of(es.createEvent(eventDto.apply(new Event())).getId());
    }

    /**
     * 이벤트 수정
     *
     * @param eventId  이벤트 ID
     * @param eventDto 이벤트 정보
     */
    @PostMapping("/{event-id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateEvent(@PathVariable("event-id") long eventId, @RequestBody EventDto eventDto) {
        es.updateEvent(eventId, eventDto::apply);
    }

    /**
     * 이벤트 삭제
     *
     * @param eventId 이벤트 ID
     */
    @DeleteMapping("/{event-id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEvent(@PathVariable("event-id") long eventId) {
        es.deleteEvent(eventId);
    }

}
