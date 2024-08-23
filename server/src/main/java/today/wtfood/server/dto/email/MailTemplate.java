package today.wtfood.server.dto.email;

import org.springframework.core.io.Resource;
import org.springframework.core.io.ResourceLoader;
import today.wtfood.server.config.properties.MailProperties;

import java.io.IOException;
import java.io.InputStream;

public record MailTemplate(String sender, String plainText, String htmlText) {

    public static MailTemplate fromProperties(
            MailProperties.MailTemplateProperties properties,
            ResourceLoader resourceLoader
    ) throws IOException {
        return new MailTemplate(
                properties.getSender(),
                parseTemplate(resourceLoader.getResource(properties.getPlainFile())),
                parseTemplate(resourceLoader.getResource(properties.getHtmlFile()))
        );
    }

    public static String parseTemplate(Resource templateResource) throws IOException {
        try (InputStream inputStream = templateResource.getInputStream()) {
            return new String(inputStream.readAllBytes());
        }
    }

}
