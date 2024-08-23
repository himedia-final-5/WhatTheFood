package today.wtfood.server.service;

import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.notice.NoticeDetail;
import today.wtfood.server.dto.notice.NoticeDto;
import today.wtfood.server.dto.notice.NoticeSummary;
import today.wtfood.server.entity.Notice;
import today.wtfood.server.exception.NotFoundException;
import today.wtfood.server.repository.NoticeRepository;

@Service
@Transactional
public class NoticeService {

    private final NoticeRepository nr;

    public NoticeService(NoticeRepository nr) {
        this.nr = nr;
    }

    // 공지사항 조회
    public Page<NoticeSummary> getNotices(Pageable pageable) {
        return nr.findAllBy(pageable);
        // Pageable : JPA 에서 페이지네이션(pagination)을 지원하기 위한 인터페이스
        // 페이지 번호와 페이지 크기 등 페이지네이션 관련 정보를 담고 있는 인터페이스이며 이 인터페이스를 사용하여 원하는 페이지의 데이터를 요청
        // JpaRepository 인터페이스에 저장되어 있음(NoticeRepository nr 에 상속자로 들어있음)

    }

    // 공지사항 작성
    public long writeNotice(Notice notice) {
        return nr.save(notice).getId();

        // save : Spring Data JPA 에서 데이터베이스에 엔티티를 저장하거나 업데이트하는 데 사용(Create 또는 Update 담당)

    }

    // 작성 후
    public NoticeDetail getNotice(long id) {
        return nr.findDetailById(id)
                .orElseThrow(() -> new NotFoundException("데이터를 찾을 수 없습니다", "id"));
    }


    public void deleteNotice(long id) {
        if (!nr.existsById(id)) {
            throw new NotFoundException("데이터를 찾을 수 없습니다", "id");
        }

        nr.deleteById(id);

    }

    @Transactional
    public void updateNotice(long id, NoticeDto dto) {
        Notice notice = nr.findById(id)
                .orElseThrow(() -> new NotFoundException("데이터를 찾을 수 없습니다", "id"));
        notice.setTitle(dto.getTitle());
        notice.setContent(dto.getContent());
    }

}
