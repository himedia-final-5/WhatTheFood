package today.wtfood.server.dto.email;

import lombok.AllArgsConstructor;
import lombok.Getter;

/**
 * 이메일 메시지 인터페이스
 */
@Getter
@AllArgsConstructor
public class EmailMessage implements IEmailMessage {

    private String to;
    private String subject;
    private String plainContent;
    private String htmlContent;

}
