package today.wtfood.server.security.enums;

import io.jsonwebtoken.Claims;

/**
 * 토큰 목적
 */
public enum TokenPurpose {
    /**
     * 사용자 인증을 위한 토큰
     *
     * @implNote {@code sub}의 값을 사용자 이름으로 가집니다.
     */
    AUTHORIZATION,

    /**
     * 사용자 인증 토큰을 갱신하기 위한 토큰
     *
     * @implNote {@code sub}의 값을 사용자 이름으로 가집니다.
     */
    REFRESH_TOKEN,

    /**
     * 사용자 이메일 인증을 위한 토큰
     *
     * @implNote {@code sub}의 값을 사용자 이메일로 가집니다.
     * <p>
     * TODO: 이메일 값을 {@code sub}에 저장하는 것이 적절한지 검토
     */
    VERIFY_EMAIL;

    /**
     * 토큰 목적 정보를 담을 Claims 키
     */
    public static final String CLAIMS_KEY = "pur"; // purpose

    /**
     * 토큰 목적이 주어진 목적과 같은지 확인합니다.
     *
     * @param purposeString 목적 문자열
     * @return 같은 목적인지 여부
     */
    public boolean isSamePurpose(String purposeString) {
        return this.name().equals(purposeString.toUpperCase());
    }

    /**
     * 토큰 목적이 주어진 목적과 같은지 확인합니다.
     *
     * @param claims 토큰의 클레임
     * @return 같은 목적인지 여부
     */
    public boolean isSamePurpose(Claims claims) {
        return isSamePurpose(claims.get(CLAIMS_KEY, String.class));
    }

}
