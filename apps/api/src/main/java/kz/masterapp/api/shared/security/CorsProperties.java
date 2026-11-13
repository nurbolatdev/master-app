package kz.masterapp.api.shared.security;

import java.util.List;
import org.springframework.boot.context.properties.ConfigurationProperties;

/** {@code app.cors.*} — origins of the admin panel allowed to call the API from a browser. */
@ConfigurationProperties("app.cors")
record CorsProperties(List<String> allowedOrigins) {
}
