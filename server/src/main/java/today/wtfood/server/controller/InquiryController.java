package today.wtfood.server.controller;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.inquiry.InquiryDetail;
import today.wtfood.server.dto.inquiry.InquiryDto;
import today.wtfood.server.dto.inquiry.InquirySummary;
import today.wtfood.server.entity.Inquiry;
import today.wtfood.server.service.InquiryService;

import java.util.HashMap;

@RestController
@RequestMapping("/inquiries")
public class InquiryController {

    private final InquiryService is;

    public InquiryController(InquiryService is) {
        this.is = is;
    }

    @PostMapping("")
    public HashMap<String, Object> insertInquiry(@RequestBody InquiryDto inquiry) {

        HashMap<String, Object> result = new HashMap<String, Object>();

        Inquiry i = is.insertInquiry(inquiry.toEntity());

        result.put("inquiryId", i.getEmail());

        return result;
    }

    @GetMapping("/{id}")
    public InquiryDetail getMyInquiryView(@PathVariable("id") long id) {
        return is.getMyInquiryView(id);
    }

    @GetMapping("/{email}")
    public Page<InquirySummary> getMyInquiryList(@PathVariable("email") String email,
                                                 @RequestParam(name = "pageNumber", defaultValue = "0") int pageNumber,
                                                 @RequestParam(name = "pageCount", defaultValue = "10") int pageCount
    ) {
        PageRequest pageRequest = PageRequest.of(pageNumber, pageCount);
        pageRequest.withSort(Sort.Direction.DESC, "id");
        return is.getMyInquiryList(email, pageRequest);
    }


    @GetMapping("/{id}")
    public void deleteInquiry(@PathVariable("id") long id) {
        is.deleteInquiry(id);
    }


    @PostMapping("")
    public void inquiryAnswer(@RequestParam("id") long id, @RequestBody String answer) {
        is.inquiryAnswer(id, answer);
    }

//    @Autowired
//    ServletContext context;
//    @PostMapping("/imgup")
//    public HashMap<String, Object> fileup(
//            @RequestParam("image") MultipartFile file ){
//        HashMap<String, Object> result = new HashMap<String, Object>();
//        String path = context.getRealPath("/uploads");
//        Calendar today = Calendar.getInstance();
//        long dt = today.getTimeInMillis();
//        String filename = file.getOriginalFilename();
//        String fn1 = filename.substring(0, filename.indexOf(".") );
//        String fn2 = filename.substring(filename.indexOf(".") );
//        String uploadPath = path + "/" + fn1 + dt + fn2;
//        try {
//            file.transferTo( new File(uploadPath) );
//            result.put("savefilename", fn1 + dt + fn2);
//        } catch (IllegalStateException | IOException e) {e.printStackTrace();}
//        return result;
//    }


}
