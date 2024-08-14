package today.wtfood.server.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.extern.log4j.Log4j2;
import org.springframework.core.io.ResourceLoader;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import today.wtfood.server.config.properties.MailProperties;
import today.wtfood.server.dto.email.MailTemplate;
import today.wtfood.server.exception.InternalServerErrorException;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Pattern;

@Log4j2
@Service
public class EmailSendService {

    private final MailProperties mailProperties;
    private final JavaMailSender javaMailSender;

    private final MailTemplate signUpMailTemplate;

    public EmailSendService(
            MailProperties mailProperties,
            ResourceLoader resourceLoader,
            JavaMailSender javaMailSender
    ) throws IOException {
        this.mailProperties = mailProperties;
        this.javaMailSender = javaMailSender;

        this.signUpMailTemplate = MailTemplate.fromProperties(
                mailProperties.getSignUpTemplate(),
                resourceLoader
        );
    }

    /**
     * 이메일을 전송
     *
     * @param targetEmail  대상 이메일
     * @param subject      이메일 제목
     * @param mailTemplate 이메일 템플릿
     * @param replacements 치환자 목록
     * @throws InternalServerErrorException 이메일 전송 중 오류가 발생했을 때
     */
    public void sendMail(String targetEmail, String subject, MailTemplate mailTemplate, Map<String, String> replacements) throws InternalServerErrorException {
        try {
            // 전송될 이메일 내용 설정
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            mimeMessageHelper.setTo(targetEmail);
            mimeMessageHelper.setSubject(subject);
            mimeMessageHelper.setFrom(mailTemplate.sender());
            mimeMessageHelper.setText(
                    replaceAllIgnoreCase(mailTemplate.plainText(), replacements),
                    replaceAllIgnoreCase(mailTemplate.htmlText(), replacements)
            );

            // 메일 전송
            javaMailSender.send(mimeMessage);
        } catch (MessagingException e) {
            log.error("이메일 전송 중 오류가 발생했습니다", e);

            throw new InternalServerErrorException("이메일 전송에 실패했습니다");
        }
    }

    /**
     * 회원가입 이메일을 전송
     *
     * @param targetEmail 대상 이메일
     * @param emailToken  이메일에 포함할 토큰
     * @throws InternalServerErrorException 이메일 전송 중 오류가 발생했을 때
     */
    public void sendSignUpEmail(String targetEmail, String emailToken) throws InternalServerErrorException {
        Map<String, String> replacements = new HashMap<>(mailProperties.getGlobalReplacements());
        replacements.put("email-token", emailToken);

        sendMail(targetEmail, "회원가입을 위한 이메일 인증", signUpMailTemplate, replacements);
    }

    private String replaceAllIgnoreCase(String text, Map<String, String> replacements) {
        for (Map.Entry<String, String> entry : replacements.entrySet()) {
            text = text.replaceAll("(?i)%" + Pattern.quote(entry.getKey()) + "%", entry.getValue());
        }
        return text;
    }

}