package today.wtfood.server.dto.member;

/**
 * 회원정보 변경 시 필요한 정보 DTO
 * TODO:  유효성 검사 추가
 *
 * @implNote DTO for {@link today.wtfood.server.entity.Member}
 */
public record MemberUpdateRequest(
        String nickname,

        String password,

        String email,

        String introduce
) {
}
