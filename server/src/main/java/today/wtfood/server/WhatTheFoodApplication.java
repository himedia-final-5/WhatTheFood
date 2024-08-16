package today.wtfood.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import today.wtfood.server.security.config.properties.JwtProperties;
import today.wtfood.server.config.properties.MailProperties;
import today.wtfood.server.security.config.properties.SecurityCorsProperties;

@SpringBootApplication
@EnableConfigurationProperties({
        SecurityCorsProperties.class,
        JwtProperties.class,
        MailProperties.class
})
public class WhatTheFoodApplication {

    public static void main(String[] args) {
        SpringApplication.run(WhatTheFoodApplication.class, args);
    }

}
