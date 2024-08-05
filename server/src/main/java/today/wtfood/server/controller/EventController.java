package today.wtfood.server.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.entity.Event;
import today.wtfood.server.repositiory.EventRepository;
import today.wtfood.server.service.EventService;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/events")
public class EventController {

    private final EventService es;

    public EventController(EventService es) {
        this.es = es;
    }

    @GetMapping("/{id}")
    public HashMap<String, Object> getEvent(@PathVariable("id") int id) {
        HashMap<String, Object> result = new HashMap<>();
        Optional<Event> event = es.getEventById(id);
        if (event.isPresent()) {
            Event eventData = event.get();
            HashMap<String, Object> eventDetails = new HashMap<>();
            eventDetails.put("title", eventData.getTitle());
            eventDetails.put("content", eventData.getContent());
            eventDetails.put("startDate", eventData.getStartDate());
            eventDetails.put("endDate", eventData.getEndDate());
            eventDetails.put("imageUrl", eventData.getImageUrl());
            result.put("event", eventDetails);
        }
        return result;
    }

    @GetMapping("/")
    public HashMap<String, Object> getEventList(@RequestParam(value = "keyword", required = false) String keyword) {
        HashMap<String, Object> result = new HashMap<>();
        List<Event> events = es.getEventList(keyword);
        result.put("eventList", events);
        return result;
    }

    @PostMapping("/{id}")
    public HashMap<String, Object> updateEvent(@PathVariable("id") int id, @RequestBody Event event) {
        HashMap<String, Object> result = new HashMap<>();
        try {
            Event updatedEvent = es.updateEvent(id, event);
            result.put("status", "success");
            result.put("updatedEvent", updatedEvent);
        } catch (RuntimeException e) {
            result.put("status", "error");
            result.put("message", e.getMessage());
        }
        return result;
    }

    @DeleteMapping("/{id}")
    public HashMap<String, Object> deleteEvent(@PathVariable("id") int id) {
        HashMap<String, Object> result = new HashMap<>();
        try {
            es.deleteEvent(id);
            result.put("status", "success");
            result.put("message", "삭제 성공");
        } catch (RuntimeException e) {
            result.put("status", "error");
            result.put("message", e.getMessage());
        }
        return result;
    }

    // 새로운 이벤트 생성
    @PostMapping("/")
    public HashMap<String, Object> createEvent(@RequestBody Event event) {
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


