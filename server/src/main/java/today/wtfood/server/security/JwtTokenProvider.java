package today.wtfood.server.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import today.wtfood.server.entity.RefreshToken;
import today.wtfood.server.repository.RefreshTokenRepository;
import today.wtfood.server.security.dto.JwtAuthResponse;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.UUID;

@Component
public class JwtTokenProvider {

    public final String JWT_ISSUER = "wtfood.today";

    private final SecretKey secretKey;
    private final long accessTokenExpiration;
    private final long refreshTokenExpiration;

    private final RefreshTokenRepository refreshTokenRepository;

    public JwtTokenProvider(
            @Value("${jwt.secret}") String secret,
            @Value("${jwt.access_token_expiration}") long accessTokenExpiration,
            @Value("${jwt.refresh_token_expiration}") long refreshTokenExpiration,
            RefreshTokenRepository refreshTokenRepository
    ) {
        this.accessTokenExpiration = accessTokenExpiration;
        this.refreshTokenExpiration = refreshTokenExpiration;
        try {
            secretKey = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
        } catch (Exception e) {
            throw new RuntimeException(e.getMessage());
        }

        this.refreshTokenRepository = refreshTokenRepository;
    }

    public JwtAuthResponse generateToken(String username) {
        // 토큰 생성 및 만료 시간 설정
        Date currentDate = new Date();
        Date accessTokenExpireDate = new Date(currentDate.getTime() + accessTokenExpiration);
        Date refreshTokenExpireDate = new Date(currentDate.getTime() + refreshTokenExpiration);

        // Claim 정보 설정
        Claims claims = Jwts.claims()
                .setSubject(username) // JWT의 주제 : 사용자 이름
                .setIssuer(JWT_ISSUER) // JWT의 발급자
                .setAudience(JWT_ISSUER) // JWT의 대상자
                .setIssuedAt(currentDate) // JWT의 발급 시간
                .setExpiration(accessTokenExpireDate) // JWT의 만료 시간
                .setId(UUID.randomUUID().toString());

        // 토큰 생성
        String accessToken = Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(currentDate)
                .setExpiration(accessTokenExpireDate)
                .signWith(secretKey)
                .compact();
        String refreshToken = Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(currentDate)
                .setExpiration(refreshTokenExpireDate)
                .signWith(secretKey)
                .compact();

        // 재발급 토큰을 DB에 저장
        refreshTokenRepository.save(
                RefreshToken.builder()
                        .tokenUuid(claims.getId())
                        .expireTime(refreshTokenExpireDate.getTime())
                        .username(username)
                        .build()
        );

        // 응답 객체 생성 및 반환
        return new JwtAuthResponse(
                accessToken,
                refreshToken,
                accessTokenExpireDate.getTime(),
                refreshTokenExpireDate.getTime()
        );
    }


    public Claims validateToken(String token) throws JwtException {
        try {
            return parseClaims(token);
        } catch (ExpiredJwtException expiredJwtException) {
            throw new JwtException("Expired");
        } catch (InvalidClaimException invalidClaimException) {
            throw new JwtException("Invalid");
        } catch (io.jsonwebtoken.JwtException jwtException) {
            throw new JwtException("JWTError");
        } catch (Exception e) {
            throw new JwtException("Error");
        }
    }

    public Claims validateRefreshToken(String refreshToken) throws JwtException {
        // 토큰 검증 및 파싱
        Claims claims = parseClaims(refreshToken);

        // 데이터베이스에서 저장된 토큰을 가져옴
        RefreshToken token = refreshTokenRepository.findByUsername(claims.getSubject())
                .orElseThrow(() -> new JwtException("Invalid Refresh Token"));

        // 토큰 일치 검사
        if (!token.getTokenUuid().equals(claims.getId())) {
            throw new JwtException("Invalid Refresh Token");
        }

        // 만료 시간 검사
        if (token.getExpireTime() < System.currentTimeMillis()) {
            throw new JwtException("Expired Refresh Token");
        }

        // 토큰 반환
        return claims;
    }

    public Claims parseClaims(String token) {
        return Jwts.parserBuilder()
                .setSigningKey(secretKey)
                .build()
                .parseClaimsJws(token)
                .getBody();
    }

    public String resolveAccessToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return bearerToken;
    }

    public String resolveRefreshToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Refresh");
        if (bearerToken != null && !bearerToken.isBlank()) {
            return bearerToken;
        }
        return null;
    }

}