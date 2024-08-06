package today.wtfood.server.controller;

import jakarta.servlet.http.HttpServletRequest;
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
    public JwtAuthResponse create(HttpServletRequest request) {
        // Request 객체로부터 재발급 토큰 추출
        String refreshToken = jwtTokenProvider.resolveRefreshToken(request);

        // 재발급 토큰이 null 일 경우 예외 처리
        if (refreshToken == null) {
            throw new IllegalArgumentException("Refresh Token required in request header");
        }

        // 접근 토큰 재발급
        return jwtTokenProvider.reissueToken(refreshToken);
    }

    @PostMapping("reissue/{refreshToken}")
    @ResponseStatus(HttpStatus.OK)
    public JwtAuthResponse create(@PathVariable("refreshToken") String refreshToken) {
        // 접근 토큰 재발급
        return jwtTokenProvider.reissueToken(refreshToken);
    }

}
