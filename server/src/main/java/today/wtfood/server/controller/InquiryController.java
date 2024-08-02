package today.wtfood.server.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import today.wtfood.server.service.InquiryService;

@RestController
@RequestMapping("/inquiry")
public class InquiryController {

    private final InquiryService is;

    public InquiryController(InquiryService is) {
        this.is = is;
    }

}
