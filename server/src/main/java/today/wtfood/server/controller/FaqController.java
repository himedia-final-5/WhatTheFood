package today.wtfood.server.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.GeneratedId;
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
        return new GeneratedId<>(fs.insertFaq(faq.toEntity()).getId());
    }

    @GetMapping("")
    @PreAuthorize("permitAll()")
    public Page<Faq> getFaqList(

            @RequestParam(name = "pageNumber", defaultValue = "0") int pageNumber,
            @RequestParam(name = "pageSize", defaultValue = "20") int pageSize
    ) {

        PageRequest pageRequest = PageRequest.of(pageNumber, pageSize);
        pageRequest.withSort(Sort.Direction.DESC, "id");
        return fs.getFaqList(pageRequest);
    }

    @GetMapping("/{id}")
    @PreAuthorize("permitAll()")
    public FaqDetail getFaqView(@PathVariable("id") long id) {
        return fs.getFaqView(id);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteInquiry(@PathVariable("id") long id) {
        fs.deleteInquiry(id);
    }


}
