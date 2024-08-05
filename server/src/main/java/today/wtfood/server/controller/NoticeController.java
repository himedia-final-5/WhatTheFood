package today.wtfood.server.controller;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.noticedto.NoticeDetail;
import today.wtfood.server.dto.noticedto.NoticeSummary;
import today.wtfood.server.entity.Notice;
import today.wtfood.server.service.NoticeService;

import java.util.HashMap;

@RestController
@RequestMapping("/notices")
public class NoticeController {

    private final NoticeService ns;

    // @Autowired 는 생략 가능
    public NoticeController(NoticeService ns) { //Autowired 대신 하는 방법
        this.ns = ns;
    }

    @GetMapping("")
    public Page<NoticeSummary> getMembers(
            @RequestParam(defaultValue = "0")
            int pageNumber,
            @RequestParam(defaultValue = "10")
            int pageSize
    ) {
        PageRequest pageRequest = PageRequest.of(pageNumber, pageSize);
        return ns.getNotices(pageRequest);

        // PageRequest.of(pageNumber, pageSize) : Spring Data JPA 에서 페이지네이션(pagination)을 구현할 때 사용하는 메서드
        // 데이터의 큰 집합을 여러 페이지로 나누어 관리할 수 있게 해줍니다.
        // 이 객체는 데이터를 조회할 때 어떤 페이지를 가져올지, 그리고 각 페이지에 얼마나 많은 데이터를 포함할지를 정의
        // pageNumber : 조회하고자 하는 페이지 번호를 지정
        // pageSize: 각 페이지에 포함될 데이터의 개수를 지정

    }


    @PostMapping("")
    HashMap<String, Object> writeNotice(@RequestBody Notice notice) {
        ns.writeNotice(notice);
        return null;
    }

    @GetMapping("/{id}")
    public NoticeDetail getNotice(@PathVariable("id") long id) {
        return ns.getNotice(id);
    }

    @DeleteMapping("/{id}")
    public void deleteNotice(@PathVariable("id") long id) {
        ns.deleteNotice(id);
    }
}
