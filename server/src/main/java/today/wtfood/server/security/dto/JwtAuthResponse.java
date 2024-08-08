package today.wtfood.server.security.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.experimental.Delegate;
import today.wtfood.server.dto.member.MemberAuth;

/**
 * JWT 인증 응답 DTO
 */
@AllArgsConstructor
public final class JwtAuthResponse implements MemberAuth {

    @Delegate
    private final MemberAuth memberAuth;

    @Getter
    private final String accessToken;

    @Getter
    private final String refreshToken;

}