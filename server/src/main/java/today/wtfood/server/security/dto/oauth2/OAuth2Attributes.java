package today.wtfood.server.security.dto.oauth2;

import lombok.Builder;
import today.wtfood.server.entity.Member;

import java.util.Map;

@Builder
public record OAuth2Attributes(
        Map<String, Object> attributes,
        String nameAttributeKey,
        String oauth2Id,
        String name,
        String email,
        String picture
) {

    public Member toEntity(String registrationId) {
        return setOauth2Id(
                Member.builder()
                        .username(email)
                        .email(email)
                        .nickname(name)
                        .profileImage(picture)
                        .build(),
                registrationId,
                oauth2Id
        );
    }

    public static Member setOauth2Id(Member member, String registrationId, String id) {
        switch (registrationId.toLowerCase()) {
            case "google" -> member.setGoogleOauthId(id);
            case "naver" -> member.setNaverOauthId(id);
            case "kakao" -> member.setKakaoOauthId(id);
            default -> throw new IllegalArgumentException("Unknown registrationId: " + registrationId);
        }
        return member;
    }

    public static OAuth2Attributes of(String registrationId, String userNameAttributeName, Map<String, Object> attributes) {
        OAuth2AttributesBuilder builder = OAuth2Attributes.builder();
        switch (registrationId.toLowerCase()) {
            case "google" -> viaGoogle(builder, attributes).build();
            case "naver" -> viaNaver(builder, attributes).build();
            case "kakao" -> viaKakao(builder, attributes).build();
            default -> throw new IllegalArgumentException("Unknown registrationId: " + registrationId);
        }
        return builder
                .attributes(attributes)
                .nameAttributeKey(userNameAttributeName)
                .build();
    }

    private static OAuth2AttributesBuilder viaGoogle(OAuth2AttributesBuilder builder, Map<String, Object> attributes) {
        return builder
                .oauth2Id((String) attributes.get("sub"))
                .name((String) attributes.get("name"))
                .email((String) attributes.get("email"))
                .picture((String) attributes.get("picture"));
    }

    @SuppressWarnings("unchecked")
    private static OAuth2AttributesBuilder viaNaver(OAuth2AttributesBuilder builder, Map<String, Object> attributes) {
        Map<String, Object> response = (Map<String, Object>) attributes.get("response");

        return builder
                .oauth2Id((String) response.get("id"))
                .name((String) response.get("name"))
                .email((String) response.get("email"))
                .picture((String) response.get("profile_image"));
    }

    @SuppressWarnings("unchecked")
    private static OAuth2AttributesBuilder viaKakao(OAuth2AttributesBuilder builder, Map<String, Object> attributes) {
        Map<String, Object> kakaoAccount = (Map<String, Object>) attributes.get("kakao_account");
        Map<String, Object> profile = (Map<String, Object>) kakaoAccount.get("profile");

        return builder
                .oauth2Id(String.valueOf(attributes.get("id")))
                .name((String) profile.get("nickname"))
                .email((String) kakaoAccount.get("email"))
                .picture((String) profile.get("profile_image_url"));
    }

}