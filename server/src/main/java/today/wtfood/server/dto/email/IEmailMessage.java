package today.wtfood.server.dto.email;

/**
 * 이메일 메시지 인터페이스
 */
public interface IEmailMessage {

    String getTo();

    String getSubject();

    String getPlainContent();

    default String getHtmlContent() {
        return getPlainContent();
    }

}
