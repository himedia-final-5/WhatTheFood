package today.wtfood.server.security.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import today.wtfood.server.entity.Member;
import today.wtfood.server.repository.MemberRepository;
import today.wtfood.server.security.dto.OAuthAttributes;

@Log4j2
@RequiredArgsConstructor
@Service
public class OAuth2UserServiceImpl implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final MemberRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest);

        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        String userNameAttributeName = userRequest.getClientRegistration().getProviderDetails().getUserInfoEndpoint().getUserNameAttributeName();

        OAuthAttributes attributes = OAuthAttributes.of(registrationId, userNameAttributeName, oAuth2User.getAttributes());

        return saveOrUpdate(registrationId, attributes);
    }

    private Member saveOrUpdate(String registrationId, OAuthAttributes attributes) {
        Member user = (switch (registrationId) {
            case "google" -> userRepository.findMemberByGoogleOauthId(attributes.oauth2Id());
            case "naver" -> userRepository.findMemberByNaverOauthId(attributes.oauth2Id());
            case "kakao" -> userRepository.findMemberByKakaoOauthId(attributes.oauth2Id());
            default -> throw new IllegalArgumentException("Unknown registrationId: " + registrationId);
        })
                .map(entity -> {
                    if (entity.getNickname() == null) {
                        entity.setNickname(attributes.name());
                    }
                    if (entity.getProfileImage() == null) {
                        entity.setProfileImage(attributes.picture());
                    }

                    return entity;
                })
                .orElse(attributes.toEntity(registrationId));

        return userRepository.save(user);
    }

}