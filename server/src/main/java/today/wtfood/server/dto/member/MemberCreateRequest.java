package today.wtfood.server.dto.member;

import today.wtfood.server.entity.Member;

/**
 * 회원가입 요청 시 필요한 정보 DTO
 * TODO:  유효성 검사 추가
 *
 * @implNote DTO for {@link today.wtfood.server.entity.Member}
 */
public record MemberCreateRequest(
        String username,

        String password,

        String nickname,

        String email,

        String profileImg
) {

    public Member toEntity() {
        return Member.builder()
                .username(username)
                .password(password)
                .nickname(nickname)
                .email(email)
                .profileImg(profileImg)
                .build();
    }

}
