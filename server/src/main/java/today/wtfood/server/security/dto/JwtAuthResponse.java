package today.wtfood.server.security.dto;

import today.wtfood.server.dto.member.MemberAuth;

/**
 * JWT 인증 응답 DTO
 */
public record JwtAuthResponse(
        String accessToken,
        String refreshToken,
        Long accessTokenExpireTime,
        Long refreshTokenExpireTime,
        MemberAuth member
) {
}