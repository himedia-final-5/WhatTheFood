package today.wtfood.server.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.email.EmailMessage;
import today.wtfood.server.dto.email.IEmailMessage;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

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

    public void sendMail(IEmailMessage emailMessage) throws MessagingException {
        // 전송될 이메일 내용 설정
        MimeMessage mimeMessage = javaMailSender.createMimeMessage();
        MimeMessageHelper mimeMessageHelper = new MimeMessageHelper(mimeMessage, true, "UTF-8");
        mimeMessageHelper.setFrom(from);
        mimeMessageHelper.setTo(emailMessage.getTo());
        mimeMessageHelper.setSubject(emailMessage.getSubject());
        mimeMessageHelper.setText(emailMessage.getPlainContent(), emailMessage.getHtmlContent());

        // 메일 전송
        javaMailSender.send(mimeMessage);
    }

    public void sendJoinEmail(String email, String emailToken) throws MessagingException {
        // 이메일 전송
        sendMail(new EmailMessage(
                email,
                "오늘뭐먹지? - 회원가입 인증 메일",
                signupMailTemplatePlain.replaceAll("%EMAIL_TOKEN%", emailToken),
                signupMailTemplateHtml.replaceAll("%EMAIL_TOKEN%", emailToken)
        ));
    }

}