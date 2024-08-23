package today.wtfood.server.security.dto.oauth2;

import org.springframework.stereotype.Component;
import today.wtfood.server.entity.member.Member;
import today.wtfood.server.repository.MemberRepository;

import java.util.Map;
import java.util.Optional;

@Component
public class NaverOAuth2Registration implements OAuth2Registration {

    @SuppressWarnings("unchecked")
    public OAuth2Attributes createAttributes(String userNameAttributeName, Map<String, Object> attributes) {
        Map<String, Object> response = (Map<String, Object>) attributes.get("response");

        return OAuth2Attributes.builder()
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .oauth2Id(String.valueOf(response.get("id")))
                .name((String) response.get("name"))
                .email((String) response.get("email"))
                .picture((String) response.get("profile_image"))
                .build();
    }

    public Optional<Member> getMember(MemberRepository memberRepository, OAuth2Attributes attributes) {
        return memberRepository.findMemberByNaverOauthId(attributes.oauth2Id());
    }

    public Member toEntity(OAuth2Attributes attributes) {
        return Member.builder()
                .username(attributes.email())
                .email(attributes.email())
                .nickname(attributes.name())
                .profileImage(attributes.picture())
                .naverOauthId(attributes.oauth2Id())
                .build();
    }

}