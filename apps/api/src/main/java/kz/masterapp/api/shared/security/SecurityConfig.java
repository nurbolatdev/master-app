package kz.masterapp.api.shared.security;

import java.util.List;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtValidators;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.server.resource.authentication.JwtAuthenticationConverter;
import org.springframework.security.oauth2.server.resource.authentication.JwtGrantedAuthoritiesConverter;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

/**
 * Stateless bearer-token API (ADR-007). Access tokens are HS256 JWTs issued by the identity
 * module (F0-5) with the {@code roles} claim. Deny by default: a new endpoint needs a token unless
 * it is listed below. {@code /api/v1/admin/**} needs {@link Role#ADMIN}. CSRF is off: tokens
 * travel in a header. CORS allows only the admin origins from {@code app.cors.allowed-origins}.
 */
@Configuration(proxyBeanMethods = false)
class SecurityConfig {

    @Bean
    SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .cors(Customizer.withDefaults())
                .sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .oauth2ResourceServer(o -> o
                        .jwt(j -> j.jwtAuthenticationConverter(rolesConverter()))
                        .authenticationEntryPoint(ProblemResponses.unauthorized())
                        .accessDeniedHandler(ProblemResponses.forbidden()))
                .exceptionHandling(e -> e
                        .authenticationEntryPoint(ProblemResponses.unauthorized())
                        .accessDeniedHandler(ProblemResponses.forbidden()))
                .authorizeHttpRequests(a -> a
                        .requestMatchers("/health", "/health/**", "/error").permitAll()
                        .requestMatchers("/v3/api-docs", "/v3/api-docs/**", "/swagger-ui.html", "/swagger-ui/**")
                        .permitAll()
                        .requestMatchers(HttpMethod.GET, "/api/v1/cities", "/api/v1/categories").permitAll()
                        .requestMatchers("/api/v1/auth/**", "/api/v1/public/**").permitAll()
                        .requestMatchers("/api/v1/admin/**").hasRole(Role.ADMIN.name())
                        .anyRequest().authenticated());
        return http.build();
    }

    @Bean
    JwtDecoder jwtDecoder(JwtProperties jwt) {
        NimbusJwtDecoder decoder = NimbusJwtDecoder.withSecretKey(jwt.signingKey())
                .macAlgorithm(MacAlgorithm.HS256)
                .build();
        decoder.setJwtValidator(JwtValidators.createDefaultWithIssuer(jwt.issuer()));
        return decoder;
    }

    @Bean
    CorsConfigurationSource corsConfigurationSource(CorsProperties cors) {
        CorsConfiguration config = new CorsConfiguration();
        config.setAllowedOrigins(cors.allowedOrigins());
        config.setAllowedMethods(List.of("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"));
        config.setAllowedHeaders(List.of("Authorization", "Content-Type", "Idempotency-Key"));
        config.setAllowCredentials(true);
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return source;
    }

    private static JwtAuthenticationConverter rolesConverter() {
        JwtGrantedAuthoritiesConverter authorities = new JwtGrantedAuthoritiesConverter();
        authorities.setAuthoritiesClaimName("roles");
        authorities.setAuthorityPrefix("ROLE_");
        JwtAuthenticationConverter converter = new JwtAuthenticationConverter();
        converter.setJwtGrantedAuthoritiesConverter(authorities);
        return converter;
    }
}
