package today.wtfood.server.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.dto.member.MemberCreateRequest;
import today.wtfood.server.entity.member.EmailToken;
import today.wtfood.server.exception.BadRequestException;
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
        try {
            // 인증 헤더 검증
            if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
                throw new BadRequestException("토큰이 누락되었습니다.");
            }

            jwtService.blockToken(authorizationHeader.substring(7));
        } catch (Exception e) {
            // 로그아웃 실패는 클라이언트에게 알리지 않음
            log.error("Signout failed: ", e);
        }
    }

    @PostMapping("/signup/email")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void sendVerifyEmail(
            @RequestParam("username")
            String username,
            @RequestParam("password")
            String password,
            @RequestParam("email")
            String email
    ) {
        // 회원가입 요청 정보 검증
        memberService.validateUsernameFormatAndUnique(username);
        memberService.validateEmailFormatAndUnique(email);

        // 이메일 토큰 생성 및 이메일 전송
        EmailToken emailToken = emailTokenService.createEmailToken(EmailToken.TokenPurpose.SING_UP, username, password, email, 1000 * 60 * 60 * 24);
        emailSendService.sendSignUpEmail(email, emailToken.getToken());
    }

    @PostMapping("/signup/email/verify")
    @ResponseStatus(HttpStatus.CREATED)
    public JwtAuthResponse verifyEmail(
            @RequestParam("token")
            String token
    ) {
        // 이메일 토큰 검증
        EmailToken emailToken = emailTokenService.getEmailToken(token);
        memberService.validateUsernameFormatAndUnique(emailToken.getUsername());
        memberService.validateEmailFormatAndUnique(emailToken.getEmail());

        // 회원 계정 생성
        memberService.createMember(new MemberCreateRequest(
                emailToken.getUsername(),
                emailToken.getPassword(),
                emailToken.getUsername(),
                emailToken.getEmail()
        ));

        // 인증 토큰 발급
        return jwtService.generateAuthToken(emailToken.getUsername());
    }

}
