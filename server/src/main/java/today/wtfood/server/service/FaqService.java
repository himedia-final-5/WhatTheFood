package today.wtfood.server.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import today.wtfood.server.dto.faq.FaqDetail;
import today.wtfood.server.entity.Faq;
import today.wtfood.server.exception.NotFoundException;
import today.wtfood.server.repository.FaqRepository;

import java.util.function.Consumer;

@Service
@Transactional
public class FaqService {

    private final FaqRepository fr;

    public FaqService(FaqRepository fr) {
        this.fr = fr;
    }

    /**
     * FAQ 목록 조회
     *
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 FAQ 목록
     */
    public Page<Faq> getFaqs(Pageable pageable) {
        return fr.findAll(pageable);
    }

    /**
     * FAQ 조회
     *
     * @param faqId FAQ ID
     * @return FAQ 상세 정보
     * @throws NotFoundException FAQ를 찾을 수 없는 경우
     */
    public FaqDetail getFaq(long faqId) throws NotFoundException {
        return fr.findDetailById(faqId)
                .orElseThrow(() -> new NotFoundException("데이터를 찾을 수 없습니다", "id"));
    }

    /**
     * FAQ 생성
     *
     * @param entity FAQ 정보
     * @return 생성된 FAQ
     */
    public Faq createFaq(Faq entity) {
        return fr.save(entity);
    }

    /**
     * FAQ 수정
     *
     * @param faqId   FAQ ID
     * @param updater 수정할 내용
     * @throws NotFoundException FAQ를 찾을 수 없는 경우
     */
    @Transactional
    public void updateFaq(long faqId, Consumer<Faq> updater) throws NotFoundException {
        Faq faq = fr.findById(faqId)
                .orElseThrow(() -> new NotFoundException("데이터를 찾을 수 없습니다", "id"));
        updater.accept(faq);
    }

    /**
     * FAQ 삭제
     *
     * @param faqId FAQ ID
     * @throws NotFoundException FAQ를 찾을 수 없는 경우
     */
    public void deleteFaq(long faqId) throws NotFoundException {
        if (!fr.existsById(faqId)) {
            throw new NotFoundException("데이터를 찾을 수 없습니다", "id");
        }

        fr.deleteById(faqId);
    }

}
