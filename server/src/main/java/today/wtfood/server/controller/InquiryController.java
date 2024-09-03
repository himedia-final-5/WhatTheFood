package today.wtfood.server.controller;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.GeneratedId;
import today.wtfood.server.dto.PageResponse;
import today.wtfood.server.dto.inquiry.InquiryDetail;
import today.wtfood.server.dto.inquiry.InquiryDto;
import today.wtfood.server.dto.inquiry.InquirySummary;
import today.wtfood.server.entity.Inquiry;
import today.wtfood.server.security.annotation.CurrentUser;
import today.wtfood.server.service.InquiryService;

@RestController
@RequestMapping("/inquiries")
public class InquiryController {

    private final InquiryService is;

    public InquiryController(InquiryService is) {
        this.is = is;
    }

    /**
     * 문의글 목록 조회
     *
     * @param pageable 페이지네이션 정보
     * @param username 유저 이름
     * @return 페이지네이션된 문의글 목록
     */
    @GetMapping("")
    @PreAuthorize("hasRole('ROLE_ADMIN') or (hasRole('ROLE_USER') and #username == authentication.principal.username)")
    public PageResponse<InquirySummary> getInquiries(
            @PageableDefault(sort = "id", direction = Sort.Direction.DESC)
            Pageable pageable,

            @RequestParam(name = "username", required = false)
            String username
    ) {
        if (username != null) {
            return PageResponse.of(is.getInquiriesByUsername(username, pageable));
        }
        return PageResponse.of(is.getInquiries(pageable));
    }

    /**
     * 문의글 조회
     *
     * @param inquiryId 문의글 ID
     * @return 문의글 상세 정보
     */
    @GetMapping("/{inquiry-id}")
    @PostAuthorize("hasRole('ROLE_ADMIN') or (hasRole('ROLE_USER') and returnObject.username == authentication.principal.username)")
    public InquiryDetail getInquiry(@PathVariable("inquiry-id") long inquiryId) {
        return is.getInquiry(inquiryId);
    }

    /**
     * 문의글 생성
     *
     * @param inquiryDto 문의글 정보
     * @param username   유저 이름
     * @return 생성된 문의글 ID
     */
    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_USER')")
    public GeneratedId<Long> createInquiry(
            @RequestBody
            InquiryDto inquiryDto,

            @CurrentUser
            String username
    ) {
        return GeneratedId.of(is.createInquiry(inquiryDto.apply(new Inquiry(), username)).getId());
    }

    /**
     * 문의글 답변 수정
     *
     * @param inquiryId 문의글 ID
     * @param answer    답변
     */
    @PutMapping("/{inquiry-id}/answer")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void updateInquiryAnswer(
            @PathVariable("inquiry-id")
            long inquiryId,
            @RequestParam
            String answer
    ) {
        is.updateInquiryAnswer(inquiryId, answer);
    }

    /**
     * 문의글 삭제
     *
     * @param inquiryId 문의글 ID
     */
    @DeleteMapping("/{inquiry-id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteInquiry(@PathVariable("inquiry-id") long inquiryId) {
        is.deleteInquiry(inquiryId);
    }

}
