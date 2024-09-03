package today.wtfood.server.service;

import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.notice.NoticeDetail;
import today.wtfood.server.dto.notice.NoticeSummary;
import today.wtfood.server.entity.Notice;
import today.wtfood.server.exception.NotFoundException;
import today.wtfood.server.repository.NoticeRepository;

import java.util.function.Consumer;

@Service
@Transactional
public class NoticeService {

    private final NoticeRepository nr;

    public NoticeService(NoticeRepository nr) {
        this.nr = nr;
    }

    /**
     * 공지사항 목록 조회
     *
     * @param pageable 페이지네이션 정보
     * @return 페이지네이션된 공지사항 목록
     */
    public Page<NoticeSummary> getNotices(Pageable pageable) {
        return nr.findAllBy(pageable);
    }

    /**
     * 공지사항 조회
     *
     * @param noticeId 공지사항 ID
     * @return 공지사항 상세 정보
     * @throws NotFoundException 데이터를 찾을 수 없을 때
     */
    public NoticeDetail getNotice(long noticeId) throws NotFoundException {
        return nr.findDetailById(noticeId)
                .orElseThrow(() -> new NotFoundException("데이터를 찾을 수 없습니다", "id"));
    }

    /**
     * 공지사항 생성
     *
     * @param notice 공지사항 정보
     * @return 생성된 공지사항 ID
     */
    public long writeNotice(Notice notice) {
        return nr.save(notice).getId();
    }

    /**
     * 공지사항 수정
     *
     * @param noticeId 공지사항 ID
     * @param updater  공지사항 업데이트 함수
     * @throws NotFoundException 데이터를 찾을 수 없을 때
     */
    @Transactional
    public void updateNotice(long noticeId, Consumer<Notice> updater) throws NotFoundException {
        Notice notice = nr.findById(noticeId)
                .orElseThrow(() -> new NotFoundException("데이터를 찾을 수 없습니다", "id"));

        updater.accept(notice);
    }

    /**
     * 공지사항 삭제
     *
     * @param noticeId 공지사항 ID
     * @throws NotFoundException 데이터를 찾을 수 없을 때
     */
    public void deleteNotice(long noticeId) throws NotFoundException {
        if (!nr.existsById(noticeId)) {
            throw new NotFoundException("데이터를 찾을 수 없습니다", "id");
        }

        nr.deleteById(noticeId);

    }

}
