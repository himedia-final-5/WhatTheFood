package today.wtfood.server.controller;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import today.wtfood.server.security.JwtTokenProvider;
import today.wtfood.server.security.dto.JwtAuthResponse;

@Log4j2
@RestController
@RequestMapping(path = "/auth", produces = MediaType.APPLICATION_JSON_VALUE)
@RequiredArgsConstructor
public class AuthController {

    private final JwtTokenProvider jwtTokenProvider;

    @PostMapping("reissue")
    @ResponseStatus(HttpStatus.OK)
    public JwtAuthResponse reissueFromHeader(@RequestHeader("Refresh") String refreshToken) {
        // 접근 토큰 재발급
        return jwtTokenProvider.reissueToken(refreshToken);
    }

    @PostMapping("reissue/{refreshToken}")
    @ResponseStatus(HttpStatus.OK)
    public JwtAuthResponse reissueFromPathVariable(@PathVariable("refreshToken") String refreshToken) {
        // 접근 토큰 재발급
        return jwtTokenProvider.reissueToken(refreshToken);
    }

}
