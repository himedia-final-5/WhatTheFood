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

    private final String homePage;

    private final String joinPage;

    private final String logoPath;

    private final JavaMailSender javaMailSender;

    private final ResourceLoader resourceLoader;

    public EmailSendService(
            @Value("${spring.mail.username}") String from,
            @Value("${site.home-page}") String homePage,
            @Value("${site.join-page}") String joinPage,
            @Value("${site.logo-path}") String logoPath,
            JavaMailSender javaMailSender,
            ResourceLoader resourceLoader
    ) {
        this.from = from;
        this.homePage = homePage;
        this.joinPage = joinPage;
        this.logoPath = logoPath;
        this.javaMailSender = javaMailSender;
        this.resourceLoader = resourceLoader;
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

    public void sendJoinEmail(String email, String token) throws MessagingException, IOException {
        // 리소스 폴더의 mail/join.txt 파일 읽어오기
        Resource plainResource = resourceLoader.getResource("classpath:mail/join.txt");
        String plainContent = new String(Files.readAllBytes(Paths.get(plainResource.getURI())));
        plainContent = plainContent.replaceAll("%HOME_PAGE%", homePage)
                .replaceAll("%JOIN_PAGE%", joinPage + "?token=" + token);

        // 리소스 폴더의 mail/join.html 파일 읽어오기
        Resource htmlResource = resourceLoader.getResource("classpath:mail/join.html");
        String htmlContent = new String(Files.readAllBytes(Paths.get(htmlResource.getURI())));
        htmlContent = htmlContent.replaceAll("%HOME_PAGE%", homePage)
                .replaceAll("%LOGO_PATH%", logoPath)
                .replaceAll("%JOIN_PAGE%", joinPage + token);

        // 이메일 전송
        sendMail(new EmailMessage(
                email,
                "오늘뭐먹지? - 회원가입 인증 메일",
                plainContent,
                htmlContent
        ));
    }

}