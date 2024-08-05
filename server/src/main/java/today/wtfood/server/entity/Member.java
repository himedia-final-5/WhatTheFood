package today.wtfood.server.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;

import java.util.List;

@Entity
@Table(name = "member")
@DynamicInsert
@DynamicUpdate
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;

    @Column(name = "username", length = 45, unique = true)
    private String username;

    @Column(name = "kakao_oauth_id", unique = true)
    private String kakaoOauthId;

    @Column(name = "naver_oauth_id", unique = true)
    private String naverOauthId;

    @Column(name = "google_oauth_id", unique = true)
    private String googleOauthId;

    @Column(name = "password")
    private String password;

    @Column(name = "email", length = 45, unique = true)
    private String email;

    @Column(name = "nickname", length = 15)
    private String nickname;

    @Column(name = "introduce", length = 200)
    private String introduce;

    @ManyToMany(fetch = FetchType.EAGER, targetEntity = Member.class)
    @JoinTable(
            name = "member_followings",
            joinColumns = @JoinColumn(name = "from_member_id"),
            inverseJoinColumns = @JoinColumn(name = "to_member_id")
    )
    private List<Member> followings;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SocialUrl> socialUrls;

    @Column(name = "role")
    @ColumnDefault("'ROLE_USER'")
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private Role role = Role.ROLE_USER;

    @Entity
    @Table(name = "member_social_urls")
    public record SocialUrl(
            @Id
            @ManyToOne
            @JoinColumn(name = "member_id", nullable = false)
            Member member,

            @Id
            @Column(name = "name", length = 45, nullable = false)
            String name,

            @Column(name = "url", length = 200, nullable = false)
            String url
    ) {
    }

    public enum Role {
        ROLE_USER, ROLE_CHEF, ROLE_BRAND, ROLE_ADMIN
    }

}