package today.wtfood.server.config.properties;

import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;

/**
 * JWT 설정 정보를 관리하는 클래스
 *
 * @implNote {@link ConfigurationProperties} 어노테이션을 사용하여 {@code application.yml} 파일의 {@code jwt} 설정 정보를 바인딩
 * @see ConfigurationProperties
 */
@Getter
@ConfigurationProperties(prefix = "jwt")
public class JwtProperties {

    /**
     * JWT 비밀키
     *
     * @implNote {@link #setSecret(String)} 메서드를 통해 설정 자동 주입 시 {@link SecretKey} 객체로 변환
     */
    private SecretKey secret;

    /**
     * JWT 접근 토큰 만료 시간
     * <p>
     * 기본값: 30분 (30 * 60 * 1000 ms)
     */
    @Setter
    private long accessTokenExpiration = 1800000;

    /**
     * JWT 갱신 토큰 만료 시간
     * <p>
     * 기본값: 7일 (7 * 24 * 60 * 60 * 1000 ms)
     */
    @Setter
    private long refreshTokenExpiration = 604800000;

    /**
     * 문자열로 받은 비밀키를 통해 {@link SecretKey} 객체를 생성하고 멤버 변수에 저장
     *
     * @param secret 비밀키 문자열
     */
    public void setSecret(String secret) {
        this.secret = Keys.hmacShaKeyFor(secret.getBytes(StandardCharsets.UTF_8));
    }

}