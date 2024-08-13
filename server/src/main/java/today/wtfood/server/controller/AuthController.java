package today.wtfood.server.controller;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.entity.EmailToken;
import today.wtfood.server.exception.BadRequestException;
import today.wtfood.server.exception.ConflictException;
import today.wtfood.server.security.dto.JwtAuthResponse;
import today.wtfood.server.security.service.JwtService;
import today.wtfood.server.service.EmailSendService;
import today.wtfood.server.service.EmailTokenService;
import today.wtfood.server.service.MemberService;

@Log4j2
@RestController
@RequestMapping(path = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
// @PreAuthorize("permitAll()") - 시큐리티 설정에서 이미 permitAll()로 설정되어 있어 주석 처리
public class AuthController {

    private final JwtService jwtService;
    private final MemberService memberService;
    private final EmailSendService emailSendService;
    private final EmailTokenService emailTokenService;

    @PostMapping("reissue")
    @ResponseStatus(HttpStatus.OK)
    public JwtAuthResponse reissue(@RequestHeader("Refresh") String refreshToken) {
        // 접근 토큰 갱신
        return jwtService.reissueToken(refreshToken);
    }

    @PostMapping("signout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void signout(@RequestHeader("Authorization") String authorizationHeader) {
        // 접근 토큰 블록
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            throw new BadRequestException("토큰이 올바르지 않습니다.");
        }
        jwtService.blockToken(authorizationHeader.substring(7));
    }

    @PostMapping("/signup/verify-email")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void sendVerifyEmail(
            @RequestParam("email")
            String email
    ) throws MessagingException {
        if (!memberService.checkEmailExists(email)) {
            throw new ConflictException("Email already exists");
        }

        EmailToken emailToken = emailTokenService.createEmailToken(EmailToken.TokenPurpose.SING_UP, email, 1000 * 60 * 60 * 24);
        emailSendService.sendSignUpEmail(email, emailToken.getToken());
    }

}
