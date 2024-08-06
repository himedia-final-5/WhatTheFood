package today.wtfood.server.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import jakarta.servlet.http.HttpServletRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import today.wtfood.server.exception.BadRequestException;
import today.wtfood.server.exception.UnauthorizedException;
import today.wtfood.server.security.dto.JwtAuthResponse;
import today.wtfood.server.security.entity.RefreshToken;
import today.wtfood.server.security.repository.RefreshTokenRepository;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.UUID;

@Component
public class JwtTokenProvider {

    private static final Logger log = LoggerFactory.getLogger(JwtTokenProvider.class);
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
        this.secretKey = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
        this.accessTokenExpiration = accessTokenExpiration;
        this.refreshTokenExpiration = refreshTokenExpiration;

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
        JwtBuilder jwtBuilder = Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(currentDate)
                .signWith(secretKey);
        String accessToken = jwtBuilder
                .setExpiration(accessTokenExpireDate)
                .compact();
        String refreshToken = jwtBuilder
                .setExpiration(refreshTokenExpireDate)
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

    public JwtAuthResponse reissueToken(String refreshToken) throws JwtException {
        // 재발급 토큰으로부터 사용자 정보 추출
        Claims claims = validateRefreshToken(refreshToken);
        String username = claims.getSubject();

        // 접근 토큰 재발급
        return generateToken(username);
    }

    public Claims validateToken(String token) throws JwtException {
        try {
            return parseClaims(token);
        } catch (ExpiredJwtException expiredJwtException) {
            throw new UnauthorizedException("JWT Token Expired");
        } catch (InvalidClaimException invalidClaimException) {
            throw new UnauthorizedException("Invalid JWT Token");
        } catch (io.jsonwebtoken.JwtException jwtException) {
            log.error("JWT Error on JWT Token Validation : {}", jwtException.getMessage());
            throw new BadRequestException("JWT Error on JWT Token Validation");
        } catch (Exception e) {
            throw new JwtException("Uncaught Error on JWT Token Validation : " + e.getMessage());
        }
    }

    public Claims validateRefreshToken(String refreshToken) throws JwtException {
        // 토큰 검증 및 파싱
        Claims claims = parseClaims(refreshToken);

        // 데이터베이스에서 저장된 토큰을 가져옴
        RefreshToken token = refreshTokenRepository.findByUsername(claims.getSubject())
                .orElseThrow(() -> new UnauthorizedException("Invalid JWT Token"));

        // 토큰 일치 검사
        if (!token.getTokenUuid().equals(claims.getId())) {
            throw new UnauthorizedException("Invalid JWT Token");
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
        String token = request.getHeader("Authorization");
        if (token == null || !token.startsWith("Bearer ")) {
            throw new BadRequestException("Bearer Access Token required in request header");
        }

        return token.substring(7);
    }

}