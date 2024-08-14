package today.wtfood.server;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import today.wtfood.server.config.properties.JwtProperties;

@SpringBootApplication
@EnableConfigurationProperties({
        JwtProperties.class,
})
public class WhatTheFoodApplication {

    public static void main(String[] args) {
        SpringApplication.run(WhatTheFoodApplication.class, args);
    }

}
