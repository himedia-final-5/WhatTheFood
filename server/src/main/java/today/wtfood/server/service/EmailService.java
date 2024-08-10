package today.wtfood.server.service;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import today.wtfood.server.dto.email.IEmailMessage;

@Service
public class EmailService {

    private final JavaMailSender javaMailSender;

    private final String from;

    public EmailService(
            @Value("${spring.mail.username}") String from,
            JavaMailSender javaMailSender
    ) {
        this.from = from;
        this.javaMailSender = javaMailSender;
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

}