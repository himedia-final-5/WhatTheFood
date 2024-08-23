package today.wtfood.server.security.dto.oauth2;

import today.wtfood.server.entity.member.Member;
import today.wtfood.server.repository.MemberRepository;

import java.util.Map;
import java.util.Optional;

public interface OAuth2Registration {

    OAuth2Attributes createAttributes(String userNameAttributeName, Map<String, Object> attributes);

    Optional<Member> getMember(MemberRepository memberRepository, OAuth2Attributes attributes);

    Member toEntity(OAuth2Attributes attributes);

    default Member createOrUpdateMember(MemberRepository memberRepository, OAuth2Attributes attributes) {
        Member user = getMember(memberRepository, attributes)
                .map(entity -> {
                    if (entity.getNickname() == null) {
                        entity.setNickname(attributes.name());
                    }
                    if (entity.getProfileImage() == null) {
                        entity.setProfileImage(attributes.picture());
                    }

                    return entity;
                })
                .orElse(toEntity(attributes));

        return memberRepository.save(user);
    }

}
