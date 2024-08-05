package today.wtfood.server;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration(exclude = {SecurityAutoConfiguration.class})
public class DisableSecurityConfig {

    // This class disables Spring Security

}