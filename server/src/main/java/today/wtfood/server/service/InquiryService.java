package today.wtfood.server.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import today.wtfood.server.dao.InquiryRepository;

@Service
@Transactional
public class InquiryService {

    InquiryRepository ir;

    public InquiryService(InquiryRepository ir) {
        this.ir = ir;
    }

}
