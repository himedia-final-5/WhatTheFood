package today.wtfood.server.dto.member;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

/**
 * 회원정보 변경 시 필요한 정보 DTO
 *
 * @implNote DTO for {@link today.wtfood.server.entity.Member}
 */
public record MemberUpdateRequest(
        @Size(min = 4, max = 45)
        String password,

        @Size(min = 2, max = 15)
        @Pattern(regexp = "^[a-zA-Z0-9_가-힣]*$", message = "닉네임은 한글, 영문, 숫자, _만 입력 가능합니다.")
        String nickname,

        @Size(min = 4, max = 45)
        @Email
        String email,

        @Size(max = 200)
        String introduce
) {
}
