package today.wtfood.server.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import today.wtfood.server.dto.inquiry.InquiryDetail;
import today.wtfood.server.dto.inquiry.InquirySummary;
import today.wtfood.server.entity.Inquiry;
import today.wtfood.server.exception.NotFoundException;
import today.wtfood.server.repository.InquiryRepository;

@Service
@Transactional
public class InquiryService {

    private final InquiryRepository ir;

    public InquiryService(InquiryRepository ir) {
        this.ir = ir;
    }

    /**
     * 문의글 목록 조회
     *
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 문의글 목록
     */
    public Page<InquirySummary> getInquiries(Pageable pageable) {
        return ir.findAllBy(pageable);
    }

    /**
     * 유저 이름으로 문의글 목록 조회
     *
     * @param username 유저 이름
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 문의글 목록
     */
    public Page<InquirySummary> getInquiriesByUsername(String username, Pageable pageable) {
        return ir.findAllByUsername(username, pageable);
    }

    /**
     * 문의글 조회
     *
     * @param inquiryId 문의글 ID
     * @return 문의글 상세 정보
     * @throws NotFoundException 문의글을 찾을 수 없을 때
     */
    public InquiryDetail getInquiry(long inquiryId) throws NotFoundException {
        return ir.findDetailById(inquiryId)
                .orElseThrow(() -> new NotFoundException("문의글을 찾을 수 없습니다.", "id"));
    }

    /**
     * 문의글 생성
     *
     * @param entity 문의글 엔티티
     * @return 생성된 문의글
     */
    public Inquiry createInquiry(Inquiry entity) {
        return ir.save(entity);
    }

    /**
     * 문의글 답변 수정
     *
     * @param inquiryId 문의글 ID
     * @param answer    답변
     * @throws NotFoundException 문의글을 찾을 수 없을 때
     */
    public void updateInquiryAnswer(long inquiryId, String answer) throws NotFoundException {
        Inquiry inquiry = ir.findById(inquiryId)
                .orElseThrow(() -> new NotFoundException("문의글을 찾을 수 없습니다.", "id"));

        inquiry.setAnswer(answer);
    }

    /**
     * 문의글 삭제
     *
     * @param inquiryId 문의글 ID
     * @throws NotFoundException 문의글을 찾을 수 없을 때
     */
    public void deleteInquiry(long inquiryId) throws NotFoundException {
        if (!ir.existsById(inquiryId)) {
            throw new NotFoundException("문의글을 찾을 수 없습니다.", "id");
        }

        ir.deleteById(inquiryId);
    }

}
