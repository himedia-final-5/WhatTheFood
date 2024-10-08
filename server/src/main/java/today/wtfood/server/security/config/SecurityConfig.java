package today.wtfood.server.security.config;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.access.hierarchicalroles.RoleHierarchy;
import org.springframework.security.access.hierarchicalroles.RoleHierarchyImpl;
import org.springframework.security.config.annotation.method.configuration.EnableMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.access.expression.DefaultWebSecurityExpressionHandler;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import today.wtfood.server.security.config.properties.SecurityCorsProperties;
import today.wtfood.server.security.filter.JwtAuthenticationFilter;
import today.wtfood.server.security.handler.AccessExceptionHandler;
import today.wtfood.server.security.handler.FormLoginResultHandler;
import today.wtfood.server.security.handler.OAuth2LoginResultHandler;
import today.wtfood.server.security.service.OAuth2UserServiceImpl;

@Log4j2
@Configuration
@EnableMethodSecurity(proxyTargetClass = true)
@RequiredArgsConstructor
public class SecurityConfig {

    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final AccessExceptionHandler accessExceptionHandler;
    private final FormLoginResultHandler formLoginResultHandler;
    private final OAuth2LoginResultHandler oAuth2LoginResultHandler;
    private final OAuth2UserServiceImpl OAuth2UserServiceImpl;
    private final SecurityCorsProperties corsProperties;

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        // CSRF 보안 기능을 비활성화
        http.csrf(AbstractHttpConfigurer::disable);

        // CORS 설정
        http.cors(config -> config.configurationSource(corsConfigurationSource()));

        // 세션을 상태 유지 방식으로 사용하지 않음
        http.sessionManagement(config -> config.sessionCreationPolicy(SessionCreationPolicy.STATELESS));

        // 폼 로그인 처리 설정
        http.formLogin(config -> config
                .loginPage("/auth/signin")
                .successHandler(formLoginResultHandler)
                .failureHandler(formLoginResultHandler)
        );

        // OAuth2 로그인 처리 설정
        http.oauth2Login(config -> config
                .userInfoEndpoint(userInfoEndpointConfig -> userInfoEndpointConfig.userService(OAuth2UserServiceImpl))
                .successHandler(oAuth2LoginResultHandler)
                .failureHandler(oAuth2LoginResultHandler)
        );

        // JWT 엑세스 토큰 검증 필터 설정
        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);

        // 접근 시 발생한 예외 처리 핸들러 설정
        http.exceptionHandling(config -> config
                .accessDeniedHandler(accessExceptionHandler)
                .authenticationEntryPoint(accessExceptionHandler)
        );

        // URL 별 권한 설정
        // noinspection deprecation (시큐리티 7.0 에서 제거될 예정인 메서드 사용)
        http.authorizeRequests()
                .requestMatchers("/auth/**").permitAll(); // 인증 관련 URL은 누구나 접근 가능
        // TODO: 나머지 경로도 세부적으로 권한 설정


        return http.build();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(corsProperties.getAllowedOrigins());
        configuration.setAllowedMethods(corsProperties.getAllowedMethods());
        configuration.setAllowedHeaders(corsProperties.getAllowedHeaders());

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }

    @Bean
    public RoleHierarchy roleHierarchy() {
        return RoleHierarchyImpl.fromHierarchy("""
                ROLE_ADMIN > ROLE_USER
                ROLE_CHEF > ROLE_USER
                ROLE_BRAND > ROLE_USER
                """);
    }

    @Bean
    public DefaultWebSecurityExpressionHandler roleHierarchyWebSecurityExpressionHandler() {
        DefaultWebSecurityExpressionHandler expressionHandler = new DefaultWebSecurityExpressionHandler();
        expressionHandler.setRoleHierarchy(roleHierarchy());
        return expressionHandler;
    }

}
