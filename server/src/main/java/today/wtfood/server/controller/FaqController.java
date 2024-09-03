package today.wtfood.server.controller;

import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.GeneratedId;
import today.wtfood.server.dto.PageResponse;
import today.wtfood.server.dto.faq.FaqDetail;
import today.wtfood.server.dto.faq.FaqDto;
import today.wtfood.server.entity.Faq;
import today.wtfood.server.service.FaqService;

@RestController
@RequestMapping("/faqs")
public class FaqController {

    private final FaqService fs;

    public FaqController(FaqService fs) {
        this.fs = fs;
    }

    /**
     * FAQ 목록 조회
     *
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 FAQ 목록
     */
    @GetMapping("")
    @PreAuthorize("permitAll()")
    public PageResponse<Faq> getFaqs(
            @PageableDefault(sort = "id", direction = Sort.Direction.DESC)
            Pageable pageable
    ) {
        return PageResponse.of(fs.getFaqs(pageable));
    }

    /**
     * FAQ 조회
     *
     * @param faqId FAQ ID
     * @return FAQ 상세 정보
     */
    @GetMapping("/{faq-id}")
    @PreAuthorize("permitAll()")
    public FaqDetail getFaq(@PathVariable("faq-id") long faqId) {
        return fs.getFaq(faqId);
    }

    /**
     * FAQ 생성
     *
     * @param faqDto FAQ 정보
     * @return 생성된 FAQ ID
     */
    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public GeneratedId<Long> createFaq(@RequestBody FaqDto faqDto) {
        return GeneratedId.of(fs.createFaq(faqDto.apply(new Faq())).getId());
    }

    /**
     * FAQ 수정
     *
     * @param faqId  FAQ ID
     * @param faqDto FAQ 정보
     */
    @PostMapping("/{faq-id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void updateFaq(@PathVariable("faq-id") long faqId, @RequestBody FaqDto faqDto) {
        fs.updateFaq(faqId, faqDto::apply);
    }

    /**
     * FAQ 삭제
     *
     * @param faqId FAQ ID
     */
    @DeleteMapping("/{faq-id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteFaq(@PathVariable("faq-id") long faqId) {
        fs.deleteFaq(faqId);
    }

}
