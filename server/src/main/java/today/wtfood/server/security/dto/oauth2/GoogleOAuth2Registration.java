package today.wtfood.server.security.dto.oauth2;

import org.springframework.stereotype.Component;
import today.wtfood.server.entity.member.Member;
import today.wtfood.server.repository.MemberRepository;

import java.util.Map;
import java.util.Optional;

@Component
public class GoogleOAuth2Registration implements OAuth2Registration {

    public OAuth2Attributes createAttributes(String userNameAttributeName, Map<String, Object> attributes) {
        return OAuth2Attributes.builder()
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .oauth2Id((String) attributes.get("sub"))
                .name((String) attributes.get("name"))
                .email((String) attributes.get("email"))
                .picture((String) attributes.get("picture"))
                .build();
    }

    public Optional<Member> getMember(MemberRepository memberRepository, OAuth2Attributes attributes) {
        return memberRepository.findMemberByGoogleOauthId(attributes.oauth2Id());
    }

    public Member toEntity(OAuth2Attributes attributes) {
        return Member.builder()
                .username(attributes.email())
                .email(attributes.email())
                .nickname(attributes.name())
                .profileImage(attributes.picture())
                .googleOauthId(attributes.oauth2Id())
                .build();
    }

}
