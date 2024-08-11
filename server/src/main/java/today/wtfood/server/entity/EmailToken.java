package today.wtfood.server.entity;

import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;
import java.util.UUID;

@Entity
@Table(name = "email_token")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EmailToken {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "token", nullable = false)
    private UUID token;

    @Column(name = "purpose", nullable = false)
    @Enumerated(EnumType.STRING)
    private TokenPurpose purpose;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "expiry_date", nullable = false)
    private Timestamp expiryDate;

    public enum TokenPurpose {
        SING_UP,
        RESET_PASSWORD,
        CHANGE_EMAIL
    }

}