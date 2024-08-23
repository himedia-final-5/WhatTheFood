package today.wtfood.server.dto.member;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Pattern;
import jakarta.validation.constraints.Size;
import lombok.Getter;
import today.wtfood.server.entity.member.Member;

/**
 * 회원 프로필 수정 시 필요한 정보 DTO
 *
 * @implNote DTO for {@link Member}
 */
@Getter
public final class MemberProfileUpdateRequest {

    @NotBlank(message = "닉네임을 입력해주세요")
    @Pattern(regexp = "^[a-zA-Z0-9_가-힣]+$", message = "닉네임은 한글, 영어, 숫자, 언더스코어(_)만 사용할 수 있습니다")
    @Size(min = 2, max = 15, message = "닉네임은 2자 이상 15자 이하로 입력해주세요")
    private String nickname;

    @Pattern(regexp = "^[a-zA-Z0-9_가-힣 !?#%^*]+$", message = "소개는 한글, 영어, 숫자, 띄어쓰기, 일부 특수기호(_!?#%^*)만 사용할 수 있습니다")
    @Size(max = 200, message = "소개는 200자 이하로 입력해주세요")
    private String introduce;

    @NotBlank(message = "프로필 이미지 주소를 입력해주세요")
    @Size(max = 200, message = "프로필 이미지 주소가 너무 깁니다")
    private String profileImage;

    @Size(max = 200, message = "배너 이미지 주소가 너무 깁니다")
    private String bannerImage;

}
