package today.wtfood.server.security.dto.oauth2;

import lombok.Builder;

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
}
