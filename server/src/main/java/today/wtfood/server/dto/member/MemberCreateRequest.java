package today.wtfood.server.dto.member;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import today.wtfood.server.entity.Member;

/**
 * 회원가입 요청 시 필요한 정보 DTO
 *
 * @implNote DTO for {@link today.wtfood.server.entity.Member}
 */
public record MemberCreateRequest(
        @NotBlank
        @Size(min = 4, max = 45)
        @Pattern(regexp = "^[a-zA-Z0-9_]*$", message = "아이디는 영문, 숫자, _만 입력 가능합니다.")
        String username,

        @NotBlank
        @Size(min = 4, max = 45)
        String password,

        @NotBlank
        @Size(min = 2, max = 15)
        @Pattern(regexp = "^[a-zA-Z0-9_가-힣]*$", message = "닉네임은 한글, 영문, 숫자, _만 입력 가능합니다.")
        String nickname,

        @NotBlank
        @Size(min = 4, max = 45)
        @Email
        String email
) {

    public Member toEntity(String encodedPassword) {
        return Member.builder()
                .username(username)
                .password(encodedPassword)
                .nickname(nickname)
                .email(email)
                .build();
    }

}
