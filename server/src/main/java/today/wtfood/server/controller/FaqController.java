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

    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public GeneratedId<Long> insertFaq(@RequestBody FaqDto faq) {
        return GeneratedId.of(fs.insertFaq(faq.toEntity()).getId());
    }

    @GetMapping("")
    @PreAuthorize("permitAll()")
    public PageResponse<Faq> getFaqList(
            @PageableDefault(sort = "id", direction = Sort.Direction.DESC)
            Pageable pageable
    ) {
        return PageResponse.of(fs.getFaqList(pageable));
    }

    @GetMapping("/{id}")
    @PreAuthorize("permitAll()")
    public FaqDetail getFaqView(@PathVariable("id") long id) {
        return fs.getFaqView(id);
    }

    @PostMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void updateFaq(@PathVariable("id") long id, @RequestBody FaqDto faq) {
        fs.updateFaq(id, faq);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteInquiry(@PathVariable("id") long id) {
        fs.deleteInquiry(id);
    }

}
