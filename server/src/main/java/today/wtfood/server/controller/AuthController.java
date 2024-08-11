package today.wtfood.server.controller;

import jakarta.mail.MessagingException;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.exception.BadRequestException;
import today.wtfood.server.security.dto.JwtAuthResponse;
import today.wtfood.server.security.enums.TokenPurpose;
import today.wtfood.server.security.service.JwtService;
import today.wtfood.server.service.EmailService;

import java.io.IOException;

@Log4j2
@RestController
@RequestMapping(path = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
// @PreAuthorize("permitAll()") - 시큐리티 설정에서 이미 permitAll()로 설정되어 있어 주석 처리
public class AuthController {

    private final JwtService jwtService;
    private final EmailService emailService;

    @PostMapping("reissue")
    @ResponseStatus(HttpStatus.OK)
    public JwtAuthResponse reissueFromHeader(@RequestHeader("Refresh") String refreshToken) {
        // 접근 토큰 갱신
        return jwtService.reissueToken(refreshToken);
    }

    @PostMapping("logout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void logout(@RequestHeader("Authorization") String authorizationHeader) {
        // 접근 토큰 블록
        if (authorizationHeader == null || !authorizationHeader.startsWith("Bearer ")) {
            throw new BadRequestException("토큰이 올바르지 않습니다.");
        }
        jwtService.blockToken(authorizationHeader.substring(7));
    }

    @PostMapping("join/email")
    @ResponseStatus(HttpStatus.OK)
    public void sendEmail(@RequestParam("email") String email) throws MessagingException, IOException {
        // 이메일 전송
        String token = jwtService.generateToken(TokenPurpose.VERIFY_EMAIL, email, 1000 * 60 * 60 * 24, null);
        emailService.sendJoinEmail(email, token);
    }

}
