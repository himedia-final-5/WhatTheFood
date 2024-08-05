package today.wtfood.server.service;


import jakarta.transaction.Transactional;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.noticedto.NoticeDetail;
import today.wtfood.server.dto.noticedto.NoticeSummary;
import today.wtfood.server.entity.Notice;
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
        return nr.getNotices(pageable);

    }

    // 공지사항 작성
    public void writeNotice(Notice notice) {
        nr.save(notice);
    }

    // 작성 후
    public NoticeDetail getNotice(long id) {
        return nr.findById(id);
    }


}
