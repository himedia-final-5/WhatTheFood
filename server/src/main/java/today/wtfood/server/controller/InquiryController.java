package today.wtfood.server.controller;

import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.inquiry.InquiryDto;
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
        Inquiry i = is.insertinquiries(inquiry.toEntity());
        result.put("inquiryId", i.getEmail());
        return result;
    }

    @GetMapping("/{id}")
    public HashMap<String, Object> getInquiryDetail(@RequestParam("id") int id) {
        HashMap<String, Object> result = new HashMap<>();


        return result;
    }

    @GetMapping("/{email}")
    public HashMap<String, Object> getInquiryList(@RequestParam("page") int page, @PathVariable("email") String email) {
        HashMap<String, Object> result = new HashMap<>();


        return result;
    }


    @GetMapping("/{id}")
    public void deleteInquiry(@PathVariable("id") int id) {

    }


    @PostMapping("")
    public void inquiryAnswer(@RequestParam("id") int id, @RequestBody Inquiry answer) {

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
