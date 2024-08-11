package today.wtfood.server.security.service;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.lang.NonNull;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.member.MemberAuth;
import today.wtfood.server.exception.BadRequestException;
import today.wtfood.server.exception.UnauthorizedException;
import today.wtfood.server.security.dto.JwtAuthResponse;
import today.wtfood.server.security.entity.BlockedToken;
import today.wtfood.server.security.enums.TokenPurpose;
import today.wtfood.server.security.repository.BlockTokenRepository;
import today.wtfood.server.service.MemberService;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.UUID;

@Log4j2
@Service
public class JwtService {

    public static final String JWT_ISSUER = "wtfood.today";

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

    /**
     * 토큰 생성
     *
     * @param purpose    토큰 주제
     * @param subject    토큰에 저장할 값
     * @param expiration 토큰 만료 시간
     * @param uuid       토큰 UUID, null 일 경우 랜덤 생성
     * @return 생성된 토큰 문자열
     */
    public String generateToken(@NonNull TokenPurpose purpose, String subject, long expiration, @Nullable String uuid) {
        // UUID 가 null 일 경우 랜덤 생성
        if (uuid == null) {
            uuid = UUID.randomUUID().toString();
        }

        // 토큰 생성 및 만료 시간 설정
        Date currentDate = new Date();
        Date expireDate = new Date(currentDate.getTime() + expiration);

        // Claim 정보 설정
        Claims claims = Jwts.claims()
                .setSubject(subject) // JWT의 주체 (주로 사용자 ID 또는 고유 식별자)
                .setIssuer(JWT_ISSUER) // JWT의 발급자 (누가 발급한 토큰인지)
                .setAudience(JWT_ISSUER) // JWT의 대상자 (누구를 위한 토큰인지)
                // .setIssuedAt(currentDate) // JWT의 발급 시간 (언제 발급한 토큰인지)
                // .setNotBefore(currentDate) // JWT의 활성 시간 (언제부터 유효한 토큰인지)
                .setExpiration(expireDate) // JWT의 만료 시간 (언제까지 유효한 토큰인지)
                .setId(uuid); // JWT의 UUID (토큰 자체의 식별자)
        claims.put(TokenPurpose.CLAIMS_KEY, purpose.name()); // JWT의 값 (토큰에 저장할 값)

        // 토큰 생성 및 반환
        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(currentDate)
                .signWith(secretKey)
                .setExpiration(expireDate)
                .compact();
    }

    public JwtAuthResponse generateAuthToken(String username) {
        MemberAuth member = memberService.getMemberByUsername(username, MemberAuth.class);

        // 토큰의 UUID 생성 (접근 토큰과 갱신 토큰의 UUID를 동일하게 설정)
        String uuid = UUID.randomUUID().toString();

        // 토큰 생성
        String accessToken = generateToken(TokenPurpose.AUTHORIZATION, username, accessTokenExpiration, uuid);
        String refreshToken = generateToken(TokenPurpose.REFRESH_TOKEN, username, refreshTokenExpiration, uuid);

        // 응답 객체 생성 및 반환
        return new JwtAuthResponse(member, accessToken, refreshToken);
    }

    public JwtAuthResponse reissueToken(String refreshToken) throws JwtException {
        // 갱신 토큰으로부터 사용자 정보 추출
        Claims claims = validateToken(refreshToken, TokenPurpose.REFRESH_TOKEN);

        // 갱신 토큰 블록
        blockToken(refreshToken);

        // username 값을 가져와 접근 토큰 갱신
        String username = claims.getSubject();
        return generateAuthToken(username);
    }

    public void blockToken(String token) {
        // 토큰 검증 및 파싱
        Claims claims = validateToken(token, null);

        // 토큰 블락 데이터베이스에 토큰 UUID 저장 (접근 토큰과 갱신 토큰의 UUID는 동일하기 때문에 동시에 블락됨)
        blockTokenRepository.save(BlockedToken.builder()
                .tokenUuid(claims.getId())
                .expireTime(claims.getExpiration().getTime())
                .build());
    }

    public boolean isBlockedToken(String tokenUuid) {
        return blockTokenRepository.existsById(tokenUuid);
    }

    public Claims validateToken(String token, @Nullable TokenPurpose expectPurpose) throws JwtException {
        try {
            Claims claims = Jwts.parserBuilder()
                    .setSigningKey(secretKey)
                    .build()
                    .parseClaimsJws(token)
                    .getBody();

            if (expectPurpose != null && !expectPurpose.isSamePurpose(claims)) {
                throw new UnauthorizedException("Invalid Token Purpose");
            }

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
            throw unauthorizedException; // 토큰 검증 단계에서 발생한 UnauthorizedException 은 그대로 반환
        } catch (Exception e) {
            throw new JwtException("Uncaught Error on JWT Token Validation : " + e.getMessage());
        }
    }

}