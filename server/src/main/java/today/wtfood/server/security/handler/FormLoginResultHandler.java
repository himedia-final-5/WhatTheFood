package today.wtfood.server.security.handler;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.stereotype.Component;
import today.wtfood.server.entity.Member;
import today.wtfood.server.exception.GlobalExceptionHandler;
import today.wtfood.server.security.dto.JwtAuthResponse;
import today.wtfood.server.security.service.JwtService;
import today.wtfood.server.util.ResponseHelper;

import java.io.IOException;

/**
 * {@code /auth/signin} 요청을 통한 인증 결과 처리
 */
@Log4j2
@Component
public class FormLoginResultHandler implements AuthenticationSuccessHandler, AuthenticationFailureHandler {

    private final JwtService jwtService;

    public FormLoginResultHandler(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    public void onAuthenticationSuccess(
            HttpServletRequest request,
            HttpServletResponse response,
            Authentication authentication
    ) throws IOException {
        // 사용자 정보 가져오기
        Member member = (Member) authentication.getPrincipal();

        // JWT 토큰 생성
        JwtAuthResponse jwtAuthResponse = jwtService.generateAuthToken(member.getUsername());

        ResponseHelper.write(response, ResponseEntity.ok(jwtAuthResponse));
    }

    @Override
    public void onAuthenticationFailure(
            HttpServletRequest request,
            HttpServletResponse response,
            AuthenticationException exception
    ) throws IOException {
        log.error("FormLogin Failed : {}", exception.getMessage());

        ResponseHelper.write(response, GlobalExceptionHandler.createResponseEntity(HttpStatus.UNAUTHORIZED, "인증이 필요합니다"));
    }

}