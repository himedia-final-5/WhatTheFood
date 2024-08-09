package today.wtfood.server.controller;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.GeneratedId;
import today.wtfood.server.dto.notice.NoticeDetail;
import today.wtfood.server.dto.notice.NoticeSummary;
import today.wtfood.server.entity.Notice;
import today.wtfood.server.service.NoticeService;

@RestController
@RequestMapping("/notices")
public class NoticeController {

    private final NoticeService ns;

    // @Autowired 는 생략 가능
    public NoticeController(NoticeService ns) { //Autowired 대신 하는 방법
        this.ns = ns;
    }

    @GetMapping("")
    @PreAuthorize("permitAll()")
    public Page<NoticeSummary> getNotices(
            @PageableDefault(sort = "id", direction = Sort.Direction.DESC)
            Pageable pageable
    ) {
        return ns.getNotices(pageable);
    }

    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public GeneratedId<Long> writeNotice(@RequestBody Notice notice) {
        return GeneratedId.of(ns.writeNotice(notice));
    }

    @GetMapping("/{id}")
    @PreAuthorize("permitAll()")
    public NoticeDetail getNotice(@PathVariable("id") long id) {
        return ns.getNotice(id);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteNotice(@PathVariable("id") long id) {
        ns.deleteNotice(id);
    }
}
