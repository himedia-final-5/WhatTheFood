package today.wtfood.server.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.security.dto.JwtAuthResponse;
import today.wtfood.server.security.service.JwtService;

@Log4j2
@RestController
@RequestMapping(path = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
// @PreAuthorize("permitAll()") - 시큐리티 설정에서 이미 permitAll()로 설정되어 있어 주석 처리
public class AuthController {

    private final JwtService jwtService;

    @PostMapping("reissue")
    @ResponseStatus(HttpStatus.OK)
    public JwtAuthResponse reissueFromHeader(@RequestHeader("Refresh") String refreshToken) {
        // 접근 토큰 갱신
        return jwtService.reissueToken(refreshToken);
    }

    @PostMapping("logout")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void logout(@RequestHeader("Authorization") String accessToken) {
        // 접근 토큰 블록
        jwtService.blockToken(accessToken);
    }

}
