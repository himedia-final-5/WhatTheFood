package today.wtfood.server.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import today.wtfood.server.dto.inquiry.InquiryDetail;
import today.wtfood.server.dto.inquiry.InquirySummary;
import today.wtfood.server.entity.Inquiry;
import today.wtfood.server.repository.InquiryRepository;

@Service
@Transactional
public class InquiryService {

    private final InquiryRepository ir;

    public InquiryService(InquiryRepository ir) {
        this.ir = ir;
    }

    public Inquiry insertInquiry(Inquiry entity) {
        return ir.save(entity);
    }

    public InquiryDetail getMyInquiryView(long id) {
        return ir.findInquiryDetailById(id)
                .orElseThrow(() -> new RuntimeException("문의글을 찾을 수 없습니다."));
    }
    
    public Page<InquirySummary> getMyInquiryList(String email, Pageable pageable) {
        return ir.findByEmail(email, pageable);
    }

    public void deleteInquiry(long id) {
        ir.deleteById(id);
    }

    public void inquiryAnswer(long id, String answer) {
        Inquiry inquiry = ir.findById(id).get();
        inquiry.setAnswer(answer);
    }
}
