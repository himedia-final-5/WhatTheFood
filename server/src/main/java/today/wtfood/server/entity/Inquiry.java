package today.wtfood.server.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
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
    private int id;

    private String email; // 유저 이메일
    private String password; // 문의사항 글 비밀번호
    private String title; // 문의사항 제목
    private String content; //문의사항 내용
    private String answer; // 관리자 답변

    @CreationTimestamp
    private Timestamp date;

}
