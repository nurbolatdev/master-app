package kz.masterapp.api.shared.security;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.options;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.header;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.nimbusds.jose.jwk.source.ImmutableSecret;
import com.nimbusds.jose.proc.SecurityContext;
import java.time.Duration;
import java.time.Instant;
import java.util.List;
import java.util.UUID;
import kz.masterapp.api.TestcontainersConfiguration;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.context.annotation.Import;
import org.springframework.http.HttpHeaders;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.test.web.servlet.MockMvc;

/**
 * Deny by default, problem bodies for 401/403, roles from the {@code roles} claim of a real
 * HS256 token signed with {@link JwtProperties#signingKey()} — the same way identity will sign.
 */
@SpringBootTest
@AutoConfigureMockMvc
@Import(TestcontainersConfiguration.class)
class SecurityRulesTests {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private JwtProperties jwt;

    private String token(String issuer, Role... roles) {
        NimbusJwtEncoder encoder = new NimbusJwtEncoder(new ImmutableSecret<SecurityContext>(jwt.signingKey()));
        Instant now = Instant.now();
        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer(issuer)
                .subject(UUID.randomUUID().toString())
                .issuedAt(now)
                .expiresAt(now.plus(Duration.ofMinutes(15)))
                .claim("roles", List.of(roles).stream().map(Role::name).toList())
                .build();
        return encoder.encode(JwtEncoderParameters.from(JwsHeader.with(MacAlgorithm.HS256).build(), claims))
                .getTokenValue();
    }

    @Test
    void protectedPathWithoutTokenIs401Problem() throws Exception {
        mockMvc.perform(get("/api/v1/me"))
                .andExpect(status().isUnauthorized())
                .andExpect(content().contentTypeCompatibleWith("application/problem+json"))
                .andExpect(jsonPath("$.code").value("AUTH_REQUIRED"))
                .andExpect(jsonPath("$.instance").value("/api/v1/me"));
    }

    @Test
    void validTokenPassesSecurity() throws Exception {
        // no /me endpoint yet (F0-5): passing security ends in 404, not 401
        mockMvc.perform(get("/api/v1/me")
                        .header(HttpHeaders.AUTHORIZATION, "Bearer " + token(jwt.issuer(), Role.CLIENT)))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$.code").value("NOT_FOUND"));
    }

    @Test
    void tokenFromAnotherIssuerIs401() throws Exception {
        mockMvc.perform(get("/api/v1/me")
                        .header(HttpHeaders.AUTHORIZATION, "Bearer " + token("someone-else", Role.CLIENT)))
                .andExpect(status().isUnauthorized())
                .andExpect(jsonPath("$.code").value("AUTH_REQUIRED"));
    }

    @Test
    void adminPathNeedsAdminRole() throws Exception {
        mockMvc.perform(get("/api/v1/admin/dashboard")
                        .header(HttpHeaders.AUTHORIZATION, "Bearer " + token(jwt.issuer(), Role.CLIENT, Role.SPECIALIST)))
                .andExpect(status().isForbidden())
                .andExpect(jsonPath("$.code").value("FORBIDDEN"));

        mockMvc.perform(get("/api/v1/admin/dashboard")
                        .header(HttpHeaders.AUTHORIZATION, "Bearer " + token(jwt.issuer(), Role.ADMIN)))
                .andExpect(status().isNotFound());
    }

    @Test
    void corsAllowsOnlyTheAdminOrigin() throws Exception {
        mockMvc.perform(options("/api/v1/categories")
                        .header(HttpHeaders.ORIGIN, "http://localhost:5173")
                        .header(HttpHeaders.ACCESS_CONTROL_REQUEST_METHOD, "GET"))
                .andExpect(status().isOk())
                .andExpect(header().string(HttpHeaders.ACCESS_CONTROL_ALLOW_ORIGIN, "http://localhost:5173"));

        mockMvc.perform(options("/api/v1/categories")
                        .header(HttpHeaders.ORIGIN, "https://evil.example")
                        .header(HttpHeaders.ACCESS_CONTROL_REQUEST_METHOD, "GET"))
                .andExpect(status().isForbidden());
    }
}
