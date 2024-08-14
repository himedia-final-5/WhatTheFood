package today.wtfood.server.entity;

import jakarta.persistence.*;
import lombok.*;
import today.wtfood.server.util.RandomStringGenerator;

import java.sql.Timestamp;

@Entity
@Table(name = "email_token")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmailToken {

    @Id
    @Column(name = "token", nullable = false)
    private String token;

    @Column(name = "purpose", nullable = false)
    @Enumerated(EnumType.STRING)
    private TokenPurpose purpose;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "expiry_date", nullable = false)
    private Timestamp expiryDate;


    @PrePersist
    public void prePersist() {
        // 토큰이 없으면 랜덤으로 생성
        if (this.token == null || this.token.isEmpty()) {
            this.token = RandomStringGenerator.generateRandomString(10);
        }
    }


    public enum TokenPurpose {
        SING_UP,
        RESET_PASSWORD,
        CHANGE_EMAIL
    }

}