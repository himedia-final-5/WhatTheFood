package today.wtfood.server.security.service;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserService;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;
import today.wtfood.server.repository.MemberRepository;
import today.wtfood.server.security.config.OAuth2Config;
import today.wtfood.server.security.dto.oauth2.OAuth2Attributes;
import today.wtfood.server.security.dto.oauth2.OAuth2Registration;

@Log4j2
@RequiredArgsConstructor
@Service
public class OAuth2UserServiceImpl implements OAuth2UserService<OAuth2UserRequest, OAuth2User> {

    private final OAuth2Config oAuth2Config;
    private final MemberRepository userRepository;

    @Override
    public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
        OAuth2UserService<OAuth2UserRequest, OAuth2User> delegate = new DefaultOAuth2UserService();
        OAuth2User oAuth2User = delegate.loadUser(userRequest);

        String registrationId = userRequest.getClientRegistration().getRegistrationId();
        String userNameAttributeName = userRequest.getClientRegistration().getProviderDetails().getUserInfoEndpoint().getUserNameAttributeName();

        OAuth2Registration registration = oAuth2Config.getOAuth2Registration(registrationId);
        OAuth2Attributes attributes = registration.createAttributes(userNameAttributeName, oAuth2User.getAttributes());

        return registration.createOrUpdateMember(userRepository, attributes);
    }

}