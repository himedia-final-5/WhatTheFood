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

    private final String joinMailPlainTemplate;
    private final String joinMailHtmlTemplate;

    public EmailSendService(
            @Value("${spring.mail.username}") String from,
            JavaMailSender javaMailSender,

            @Value("${site.home-page}") String homePage,
            @Value("${site.join-page}") String joinPage,
            @Value("${site.logo-path}") String logoPath,
            ResourceLoader resourceLoader
    ) throws IOException {
        this.from = from;
        this.javaMailSender = javaMailSender;

        // 리소스 폴더의 mail/join.txt 파일 읽어오기
        Resource plainResource = resourceLoader.getResource("classpath:mail/join.txt");
        this.joinMailPlainTemplate = new String(Files.readAllBytes(Paths.get(plainResource.getURI())))
                .replaceAll("%HOME_PAGE%", homePage)
                .replaceAll("%JOIN_PAGE%", joinPage)
                .replaceAll("%LOGO_PATH%", logoPath);

        // 리소스 폴더의 mail/join.html 파일 읽어오기
        Resource htmlResource = resourceLoader.getResource("classpath:mail/join.html");
        this.joinMailHtmlTemplate = new String(Files.readAllBytes(Paths.get(htmlResource.getURI())))
                .replaceAll("%HOME_PAGE%", homePage)
                .replaceAll("%JOIN_PAGE%", joinPage)
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
                joinMailPlainTemplate.replaceAll("%EMAIL_TOKEN%", emailToken),
                joinMailHtmlTemplate.replaceAll("%EMAIL_TOKEN%", emailToken)
        ));
    }

}