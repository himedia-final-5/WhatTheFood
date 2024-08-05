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


}
