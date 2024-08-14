package today.wtfood.server.service;

import org.springframework.stereotype.Service;
import today.wtfood.server.entity.EmailToken;
import today.wtfood.server.exception.BadRequestException;
import today.wtfood.server.repository.EmailTokenRepository;

import java.sql.Timestamp;
import java.util.UUID;

@Service
public class EmailTokenService {

    private final EmailTokenRepository emailTokenRepository;

    public EmailTokenService(EmailTokenRepository emailTokenRepository) {
        this.emailTokenRepository = emailTokenRepository;
    }

    /**
     * 이메일 토큰 생성
     */
    public EmailToken createEmailToken(EmailToken.TokenPurpose tokenPurpose, String email, long expiration) {
        return emailTokenRepository.save(EmailToken.builder()
                .purpose(tokenPurpose)
                .email(email)
                .expiryDate(new Timestamp(System.currentTimeMillis() + expiration))
                .build());
    }

    /**
     * 이메일 토큰 삭제
     */
    public void deleteEmailToken(EmailToken emailToken) {
        emailTokenRepository.delete(emailToken);
    }

    /**
     * 이메일 토큰 조회
     */
    public EmailToken getEmailToken(UUID token) {
        return emailTokenRepository.findByToken(token)
                .orElseThrow(() -> new BadRequestException("유효하지 않은 인증 문자입니다."));
    }

}