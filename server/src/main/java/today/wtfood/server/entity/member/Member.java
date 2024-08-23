package today.wtfood.server.entity.member;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;
import org.hibernate.annotations.DynamicUpdate;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;
import today.wtfood.server.entity.Recipe;

import java.util.Collection;
import java.util.List;
import java.util.Map;
import java.util.Set;

@Entity
@Table(name = "member")
@DynamicInsert
@DynamicUpdate
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Member implements UserDetails, OAuth2User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false, unique = true)
    private Long id;

    @Column(name = "username", length = 45, unique = true)
    private String username;

    @JsonIgnore
    @Column(name = "password")
    private String password;

    @JsonIgnore
    @Override
    public Map<String, Object> getAttributes() {
        return Map.of(
                "id", id,
                "nickname", nickname,
                "email", email,
                "profile-image", profileImage
        );
    }

    @JsonIgnore
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of((GrantedAuthority) () -> role.name());
    }

    @Column(name = "kakao_oauth_id", unique = true)
    private String kakaoOauthId;

    @Column(name = "naver_oauth_id", unique = true)
    private String naverOauthId;

    @Column(name = "google_oauth_id", unique = true)
    private String googleOauthId;

    @Column(name = "email", length = 45, unique = true)
    private String email;

    @Column(name = "nickname", length = 15)
    private String nickname;

    @Column(name = "profile_image", length = 200)
    private String profileImage;

    @Column(name = "banner_image", length = 200)
    private String bannerImage;

    @Column(name = "introduce", length = 200)
    private String introduce;

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<SocialUrl> socialUrls;

    @Column(name = "role")
    @ColumnDefault("'ROLE_USER'")
    @Enumerated(EnumType.STRING)
    @Builder.Default
    private Role role = Role.ROLE_USER;

    @Override
    public String getName() {
        return username;
    }

    @Entity
    @Table(name = "member_social_urls")
    @Getter
    @Setter
    @NoArgsConstructor
    public static final class SocialUrl {

        @Id
        @ManyToOne
        @JoinColumn(name = "member_id", nullable = false)
        private Member member;

        @Id
        @Column(name = "name", length = 45, nullable = false)
        private String name;

        @Column(name = "url", length = 200, nullable = false)
        private String url;

    }

    public enum Role {
        ROLE_USER, ROLE_CHEF, ROLE_BRAND, ROLE_ADMIN
    }

    @OneToMany(mappedBy = "member", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Recipe.Comment> comments;

    // 찜한 레시피들 목록

    // @ManyToMany(cascade = CascadeType.ALL)
    @ManyToMany
    @JoinTable(
            name = "favorite_recipes",
            joinColumns = @JoinColumn(name = "member_id"),
            inverseJoinColumns = @JoinColumn(name = "recipe_id")
    )
    private Set<Recipe> favoriteRecipes; // 사용자가 찜한 레시피 목록


}