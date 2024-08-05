package today.wtfood.server.entity;

import jakarta.persistence.*;
import lombok.*;
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

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "kakao_oauth_id", unique = true)
    private String kakaoOauthId;

    @Column(name = "naver_oauth_id", unique = true)
    private String naverOauthId;

    @Column(name = "google_oauth_id", unique = true)
    private String googleOauthId;

    @Column(name = "password")
    private String password;

    @Column(name = "email", unique = true)
    private String email;

    @Column(name = "nickname")
    private String nickname;

    @Column(name = "introduce")
    private String introduce;

    @Column(name = "profile_img")
    private String profileImg;

    @Column(name = "banner_img")
    private String bannerImg;

    @ManyToMany(fetch = FetchType.EAGER, targetEntity = Member.class)
    @JoinTable(
            name = "member_followings",
            joinColumns = @JoinColumn(name = "from_member_id"),
            inverseJoinColumns = @JoinColumn(name = "to_member_id")
    )
    private List<Member> followings;

    @ManyToMany(fetch = FetchType.EAGER, targetEntity = Member.class)
    @JoinTable(
            name = "member_social_urls",
            joinColumns = @JoinColumn(name = "member_id"),
            inverseJoinColumns = @JoinColumn(name = "social_url")
    )
    private List<SocialUrl> socialUrls;

    @ElementCollection(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private List<Role> roles = List.of(Role.ROLE_USER);

    public record SocialUrl(String name, String url) {
    }

    public enum Role {
        ROLE_USER, ROLE_CHEF, ROLE_BRAND, ROLE_ADMIN
    }

}