package today.wtfood.server.security.service;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.member.MemberAuth;
import today.wtfood.server.exception.BadRequestException;
import today.wtfood.server.exception.UnauthorizedException;
import today.wtfood.server.security.dto.JwtAuthResponse;
import today.wtfood.server.security.entity.BlockedToken;
import today.wtfood.server.security.repository.BlockTokenRepository;
import today.wtfood.server.service.MemberService;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.UUID;

@Log4j2
@Service
public class JwtService {

    public final String JWT_ISSUER = "wtfood.today";

    private final SecretKey secretKey;
    private final long accessTokenExpiration;
    private final long refreshTokenExpiration;

    private final MemberService memberService;
    private final BlockTokenRepository blockTokenRepository;

    public JwtService(
            @Value("${jwt.secret}") String secret,
            @Value("${jwt.access_token_expiration}") long accessTokenExpiration,
            @Value("${jwt.refresh_token_expiration}") long refreshTokenExpiration,
            MemberService memberService,
            BlockTokenRepository blockTokenRepository
    ) {
        this.secretKey = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
        this.accessTokenExpiration = accessTokenExpiration;
        this.refreshTokenExpiration = refreshTokenExpiration;

        this.memberService = memberService;
        this.blockTokenRepository = blockTokenRepository;
    }

    public JwtAuthResponse generateToken(String username) {
        MemberAuth member = memberService.getMemberByUsername(username, MemberAuth.class);

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

        // 응답 객체 생성 및 반환
        return new JwtAuthResponse(member, accessToken, refreshToken);
    }

    public JwtAuthResponse reissueToken(String refreshToken) throws JwtException {
        // 재발급 토큰으로부터 사용자 정보 추출
        Claims claims = validateToken(refreshToken);
        String username = claims.getSubject();

        // 접근 토큰 재발급
        return generateToken(username);
    }

    public void blockToken(String token) {
        // 토큰 검증 및 파싱
        Claims claims = validateToken(token);

        // 데이터베이스에 토큰 저장
        blockTokenRepository.save(BlockedToken.builder()
                .tokenUuid(claims.getId())
                .expireTime(claims.getExpiration().getTime())
                .build());
    }

    public boolean isBlockedToken(String tokenId) {
        return blockTokenRepository.existsById(tokenId);
    }

    public Claims validateToken(String token) throws JwtException {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            if (isBlockedToken(claims.getId())) {
                throw new UnauthorizedException("Blocked JWT Token");
            }
            return claims;
        } catch (ExpiredJwtException expiredJwtException) {
            throw new UnauthorizedException("JWT Token Expired");
        } catch (InvalidClaimException invalidClaimException) {
            throw new UnauthorizedException("Invalid JWT Token");
        } catch (io.jsonwebtoken.JwtException jwtException) {
            log.error("JWT Error on JWT Token Validation : {}", jwtException.getMessage());
            throw new BadRequestException("JWT Error on JWT Token Validation");
        } catch (UnauthorizedException unauthorizedException) {
            throw unauthorizedException;
        } catch (Exception e) {
            throw new JwtException("Uncaught Error on JWT Token Validation : " + e.getMessage());
        }
    }

}