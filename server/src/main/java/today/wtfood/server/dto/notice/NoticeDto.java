package today.wtfood.server.dto.notice;

import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

public class NoticeDto {


    @CreationTimestamp
    Timestamp writeDate;
    String title;
    String content;

    //생성
    //수정
    //응답


}
