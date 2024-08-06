package today.wtfood.server.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "member_refresh_token")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class RefreshToken {

    @Id
    @Column(length = 45, nullable = false)
    private String username;

    @Column(length = 36, nullable = false, unique = true)
    private String tokenUuid;

    @Column(nullable = false)
    private Long expireTime;

}