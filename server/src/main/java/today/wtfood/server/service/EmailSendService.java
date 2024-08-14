package today.wtfood.server.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.email.EmailMessage;
import today.wtfood.server.dto.email.IEmailMessage;
import today.wtfood.server.exception.InternalServerErrorException;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

@Log4j2
@Service
public class EmailSendService {

    private final String from;
    private final JavaMailSender javaMailSender;

    private final String signupMailTemplatePlain;
    private final String signupMailTemplateHtml;

    public EmailSendService(
            @Value("${mail.sender.verify-email}") String from,
            @Value("${mail.template.home-page}") String homePage,
            @Value("${mail.template.logo-path}") String logoPath,
            ResourceLoader resourceLoader,
            JavaMailSender javaMailSender
    ) throws IOException {
        this.from = from;
        this.javaMailSender = javaMailSender;

        // 리소스 폴더의 mail/signup.txt 파일 읽어오기
        this.signupMailTemplatePlain = parseTemplate(
                resourceLoader.getResource("classpath:mail/signup.txt"),
                homePage,
                logoPath
        );

        // 리소스 폴더의 mail/signup.html 파일 읽어오기
        this.signupMailTemplateHtml = parseTemplate(
                resourceLoader.getResource("classpath:mail/signup.html"),
                homePage,
                logoPath
        );
    }

    private String parseTemplate(Resource templateResource, String homePage, String logoPath) throws IOException {
        return new String(Files.readAllBytes(Paths.get(templateResource.getURI())))
                .replaceAll("%HOME_PAGE%", homePage)
                .replaceAll("%LOGO_PATH%", logoPath);
    }

    public void sendMail(IEmailMessage emailMessage) throws InternalServerErrorException {
        try {
            // 전송될 이메일 내용 설정
            MimeMessage mimeMessage = javaMailSender.createMimeMessage();
            MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
            mimeMessageHelper.setFrom(from);
            mimeMessageHelper.setTo(emailMessage.getTo());
            mimeMessageHelper.setSubject(emailMessage.getSubject());
            mimeMessageHelper.setText(emailMessage.getPlainContent(), emailMessage.getHtmlContent());

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
     * @param email      대상 이메일
     * @param emailToken 이메일에 포함할 토큰
     * @throws InternalServerErrorException 이메일 전송 중 오류가 발생했을 때
     */
    public void sendSignUpEmail(String email, String emailToken) throws InternalServerErrorException {
        sendMail(new EmailMessage(
                email,
                "오늘뭐먹지? - 회원가입 인증 메일",
                signupMailTemplatePlain.replaceAll("%EMAIL_TOKEN%", emailToken),
                signupMailTemplateHtml.replaceAll("%EMAIL_TOKEN%", emailToken)
        ));
    }

}