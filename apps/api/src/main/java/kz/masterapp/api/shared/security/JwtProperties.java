package kz.masterapp.api.shared.security;

import java.nio.charset.StandardCharsets;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import org.springframework.boot.context.properties.ConfigurationProperties;

/**
 * {@code app.jwt.*} — key and issuer of access tokens (HS256). The identity module signs tokens
 * with {@link #signingKey()}; {@code SecurityConfig} verifies them with the same key.
 */
@ConfigurationProperties("app.jwt")
public record JwtProperties(String secret, String issuer) {

    public JwtProperties {
        if (secret == null || secret.length() < 32) {
            throw new IllegalArgumentException("app.jwt.secret (JWT_SECRET) must be at least 32 characters");
        }
    }

    public SecretKey signingKey() {
        return new SecretKeySpec(secret.getBytes(StandardCharsets.UTF_8), "HmacSHA256");
    }
}
