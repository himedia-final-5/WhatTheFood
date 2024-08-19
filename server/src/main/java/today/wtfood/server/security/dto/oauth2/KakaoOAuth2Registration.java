package today.wtfood.server.security.dto.oauth2;

import org.springframework.stereotype.Component;
import today.wtfood.server.entity.Member;
import today.wtfood.server.repository.MemberRepository;

import java.util.Map;
import java.util.Optional;

@Component
public class KakaoOAuth2Registration implements OAuth2Registration {

    @SuppressWarnings("unchecked")
    public OAuth2Attributes createAttributes(String userNameAttributeName, Map<String, Object> attributes) {
        Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
        Map<String, Object> profile = (Map<String, Object>) kakaoAccount.get("profile");

        return OAuth2Attributes.builder()
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .oauth2Id(String.valueOf(attributes.get("id")))
                .name((String) profile.get("nickname"))
                .email((String) kakaoAccount.get("email"))
                .picture((String) profile.get("profile_image_url"))
                .build();
    }

    public Optional<Member> getMember(MemberRepository memberRepository, OAuth2Attributes attributes) {
        return memberRepository.findMemberByKakaoOauthId(attributes.oauth2Id());
    }

    public Member toEntity(OAuth2Attributes attributes) {
        return Member.builder()
                .username(attributes.email())
                .email(attributes.email())
                .nickname(attributes.name())
                .profileImage(attributes.picture())
                .kakaoOauthId(attributes.oauth2Id())
                .build();
    }

}