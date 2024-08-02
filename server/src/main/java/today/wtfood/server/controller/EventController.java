package today.wtfood.server.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.entity.Event;
import today.wtfood.server.service.EventService;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService es;


    //이벤트 생성
    @GetMapping("/getevent/{id}")
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

    //키워드별
    @GetMapping("/geteventlist")
    public HashMap<String, Object> getEventList(@RequestParam(value = "keyword", required = false) String keyword) {
        HashMap<String, Object> result = new HashMap<>();
        List<Event> events = es.getEventList(keyword);
        result.put("eventList", events);
        return result;
    }


    //이벤트 수정
    @PutMapping("/updateevent/{id}")
    public HashMap<String, Object> updateEvent(@PathVariable("id") int id, @RequestBody Event event) {
        HashMap<String, Object> result = new HashMap<>();
        try {
            // 이벤트를 업데이트 시도
            Event updatedEvent = es.updateEvent(id, event);
            result.put("status", "success");
            result.put("updatedEvent", updatedEvent);
        } catch (RuntimeException e) {
            result.put("status", "error");
            result.put("message", e.getMessage());
        }
        return result;
    }


    //이벤트 삭제
    @DeleteMapping("/deleteevent/{id}")
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

}
