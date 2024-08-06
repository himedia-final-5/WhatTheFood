package today.wtfood.server.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.CreationTimestamp;

import java.sql.Timestamp;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
public class Inquiry {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String email; // 유저 이메일
    private String title; // 문의사항 제목
    private String content; //문의사항 내용
    private String answer; // 관리자 답변
    private String image; // 문의 스크린샷
    

    @CreationTimestamp
    @Column(columnDefinition = "TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL")
    private Timestamp date;

}
