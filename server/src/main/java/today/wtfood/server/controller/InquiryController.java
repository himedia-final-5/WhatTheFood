package today.wtfood.server.controller;

import jakarta.servlet.ServletContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import today.wtfood.server.dto.GeneratedId;
import today.wtfood.server.dto.inquiry.InquiryDetail;
import today.wtfood.server.dto.inquiry.InquiryDto;
import today.wtfood.server.dto.inquiry.InquirySummary;
import today.wtfood.server.entity.Inquiry;
import today.wtfood.server.service.InquiryService;

import java.io.File;
import java.io.IOException;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("/inquiries")
public class InquiryController {

    private final InquiryService is;

    public InquiryController(InquiryService is) {
        this.is = is;
    }

    @PostMapping("")
    @PreAuthorize("hasRole('ROLE_USER')")
    public GeneratedId<Long> insertInquiry(@RequestBody InquiryDto inquiry) {
        return new GeneratedId<>(is.insertInquiry(inquiry.toEntity()).getId());
    }

    @GetMapping("")
    @PreAuthorize("hasRole('ROLE_USER')")
    public List<Inquiry> allInquiry() {
        return is.getAllInquiry();
    }

    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public InquiryDetail getMyInquiryView(@PathVariable("id") long id) {
        return is.getMyInquiryView(id);
    }

    @GetMapping("/email/{loginUser}")
    @PreAuthorize("hasRole('ROLE_USER')")
    public Page<InquirySummary> getMyInquiryList(
            @PathVariable("loginUser")
            String loginUser,
            Pageable pageable
    ) {
        return is.getMyInquiryList(loginUser, pageable);
    }

    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void deleteInquiry(@PathVariable("id") long id) {
        is.deleteInquiry(id);
    }

    @PutMapping("/{id}/answer")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public void inquiryAnswer(@PathVariable("id") long id, @RequestParam("answer") String answer) {
        is.inquiryAnswer(id, answer);
    }


    @Autowired
    ServletContext context;

    @PostMapping("/fileupload")
    @PreAuthorize("hasRole('ROLE_USER')")
    public HashMap<String, Object> fileupload(
            @RequestParam("appendImage") MultipartFile file) {
        HashMap<String, Object> result = new HashMap<String, Object>();
        String path = context.getRealPath("/uploads");
        Calendar today = Calendar.getInstance();
        long dt = today.getTimeInMillis();
        String filename = file.getOriginalFilename();
        String fn1 = filename.substring(0, filename.indexOf("."));
        String fn2 = filename.substring(filename.indexOf("."));
        String uploadPath = path + "/" + fn1 + dt + fn2;
        try {
            file.transferTo(new File(uploadPath));
            result.put("appendImage", fn1 + dt + fn2);
        } catch (IllegalStateException | IOException e) {
            e.printStackTrace();
        }
        return result;
    }


}
