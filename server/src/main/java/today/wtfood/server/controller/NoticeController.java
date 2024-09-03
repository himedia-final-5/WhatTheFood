package today.wtfood.server.controller;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.GeneratedId;
import today.wtfood.server.dto.PageResponse;
import today.wtfood.server.dto.notice.NoticeDetail;
import today.wtfood.server.dto.notice.NoticeDto;
import today.wtfood.server.dto.notice.NoticeSummary;
import today.wtfood.server.entity.Notice;
import today.wtfood.server.service.NoticeService;

@RestController
@RequestMapping("/notices")
public class NoticeController {

    private final NoticeService ns;

    public NoticeController(NoticeService ns) { //Autowired 대신 하는 방법
        this.ns = ns;
    }

    /**
     * 공지사항 목록 조회
     *
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 공지사항 목록
     */
    @GetMapping("")
    @PreAuthorize("permitAll()")
    public PageResponse<NoticeSummary> getNotices(
            @PageableDefault(sort = "id", direction = Sort.Direction.DESC)
            Pageable pageable
    ) {
        return PageResponse.of(ns.getNotices(pageable));
    }

    /**
     * 공지사항 조회
     *
     * @param noticeId 공지사항 ID
     * @return 공지사항 상세 정보
     */
    @GetMapping("/{notice-id}")
    @PreAuthorize("permitAll()")
    public NoticeDetail getNotice(@PathVariable("notice-id") long noticeId) {
        return ns.getNotice(noticeId);
    }

    /**
     * 공지사항 생성
     *
     * @param noticeDto 공지사항 정보
     * @return 생성된 공지사항 ID
     */
    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public GeneratedId<Long> writeNotice(@RequestBody NoticeDto noticeDto) {
        return GeneratedId.of(ns.writeNotice(noticeDto.apply(new Notice())));
    }

    /**
     * 공지사항 수정
     *
     * @param noticeId  공지사항 ID
     * @param noticeDto 공지사항 정보
     */
    @PostMapping("/{notice-id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void updateNotice(
            @PathVariable("notice-id")
            long noticeId,
            @RequestBody
            NoticeDto noticeDto
    ) {
        ns.updateNotice(noticeId, noticeDto::apply);
    }

    /**
     * 공지사항 삭제
     *
     * @param noticeId 공지사항 ID
     */
    @DeleteMapping("/{notice-id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteNotice(@PathVariable("notice-id") long noticeId) {
        ns.deleteNotice(noticeId);
    }

}
