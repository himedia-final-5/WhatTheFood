package today.wtfood.server.config.properties;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.Map;

@Getter
@Setter
@ConfigurationProperties(prefix = "mail")
public class MailProperties {

    private Map<String, String> globalReplacements;

    private MailTemplateProperties signUpTemplate;

    @Getter
    @Setter
    public static class MailTemplateProperties {

        private String sender;
        private String plainFile;
        private String htmlFile;

    }

}
