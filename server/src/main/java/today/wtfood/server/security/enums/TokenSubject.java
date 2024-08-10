package today.wtfood.server.security.enums;

/**
 * 토큰 주제
 */
public enum TokenSubject {
    /**
     * 접근 토큰
     *
     * @implNote 접근 토큰은 사용자의 인증을 확인하는 데 사용됩니다. {@code username}을 값으로 가집니다.
     */
    ACCESS,

    /**
     * 갱신 토큰
     *
     * @implNote 갱신 토큰은 사용자의 인증을 갱신하는 데 사용됩니다. {@code username}을 값으로 가집니다.
     */
    REFRESH;

    /**
     * 문자열로부터 토큰 타입을 가져옵니다.
     *
     * @param type 토큰 타입 문자열
     * @return 토큰 타입
     */
    public static TokenSubject fromString(String type) {
        return switch (type) {
            case "ACCESS" -> ACCESS;
            case "REFRESH" -> REFRESH;
            default -> throw new IllegalArgumentException("Unknown token type: " + type);
        };
    }

}
