package today.wtfood.server.security.config;

import lombok.RequiredArgsConstructor;
import org.springframework.boot.autoconfigure.security.oauth2.client.OAuth2ClientProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.client.registration.InMemoryClientRegistrationRepository;
import org.springframework.security.oauth2.core.AuthorizationGrantType;
import org.springframework.security.oauth2.core.ClientAuthenticationMethod;

import java.util.Arrays;

@Configuration
@RequiredArgsConstructor
public class OAuth2Config {

    private final OAuth2ClientProperties oAuth2ClientProperties;

    @Bean
    public ClientRegistrationRepository clientRegistrationRepository() {
        return new InMemoryClientRegistrationRepository(Arrays.asList(
                getClientRegistration("google"),
                getClientRegistration("naver"),
                getClientRegistration("kakao")
        ));
    }

    private ClientRegistration getClientRegistration(String registrationId) {
        OAuth2ClientProperties.Registration registration = oAuth2ClientProperties.getRegistration().get(registrationId);
        OAuth2ClientProperties.Provider provider = oAuth2ClientProperties.getProvider().get(registrationId);

        return ClientRegistration.withRegistrationId(registrationId)
                .clientId(registration.getClientId())
                .clientSecret(registration.getClientSecret())
                .clientAuthenticationMethod(new ClientAuthenticationMethod(registration.getClientAuthenticationMethod()))
                .authorizationGrantType(new AuthorizationGrantType(registration.getAuthorizationGrantType()))
                .redirectUri(registration.getRedirectUri())
                .scope(registration.getScope())
                .authorizationUri(provider.getAuthorizationUri())
                .tokenUri(provider.getTokenUri())
                .userInfoUri(provider.getUserInfoUri())
                .userNameAttributeName(provider.getUserNameAttribute())
                .clientName(registration.getClientName())
                .build();
    }

}