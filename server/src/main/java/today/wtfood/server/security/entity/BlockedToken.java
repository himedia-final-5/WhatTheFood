package today.wtfood.server.security.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "blocked_token")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class BlockedToken {

    @Id
    @Column(length = 36, nullable = false, unique = true)
    private String tokenUuid;

    @Column(nullable = false)
    private Long expireTime;

}