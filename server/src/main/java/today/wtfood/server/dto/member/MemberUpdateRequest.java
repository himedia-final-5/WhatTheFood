package today.wtfood.server.dto.member;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;

/**
 * 회원정보 변경 시 필요한 정보 DTO
 *
 * @implNote DTO for {@link today.wtfood.server.entity.Member}
 */
public record MemberUpdateRequest(
        @NotBlank
        @Size(min = 4, max = 45, message = "비밀번호는 4자 이상 45자 이하로 입력해주세요")
        String password,

        @NotBlank
        @Pattern(regexp = "^[a-zA-Z0-9_가-힣]{2,15}$", message = "올바른 닉네임 형식이 아닙니다")
        String nickname,

        @NotBlank
        @Pattern(regexp = "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$", message = "올바른 이메일 형식이 아닙니다")
        String email,

        @Size(max = 200, message = "소개는 200자 이하로 입력해주세요")
        String introduce
) {
}
