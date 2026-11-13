package kz.masterapp.api.shared.openapi;

import io.swagger.v3.core.converter.ModelConverters;
import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import io.swagger.v3.oas.models.servers.Server;
import java.util.List;
import kz.masterapp.api.shared.errors.ApiProblem;
import org.springdoc.core.customizers.OpenApiCustomizer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
 * Metadata of the OpenAPI document ({@code /v3/api-docs}, Swagger UI at {@code /swagger-ui.html}).
 * The committed copy is {@code apps/api/openapi.json}; {@code packages/api-types} is generated
 * from it. Every operation needs a bearer token unless it opts out with an empty
 * {@code @SecurityRequirements}, matching deny-by-default in {@code SecurityConfig}.
 */
@Configuration(proxyBeanMethods = false)
class OpenApiConfig {

    static final String BEARER_AUTH = "bearerAuth";

    @Bean
    OpenAPI openApi() {
        return new OpenAPI()
                .info(new Info()
                        .title("Master App API")
                        .version("v1")
                        .description("REST API of the Master App mobile app and admin panel"))
                .servers(List.of(new Server().url("/")))
                .components(new Components()
                        .addSecuritySchemes(BEARER_AUTH, new SecurityScheme()
                                .type(SecurityScheme.Type.HTTP)
                                .scheme("bearer")
                                .bearerFormat("JWT")))
                .addSecurityItem(new SecurityRequirement().addList(BEARER_AUTH));
    }

    /** Puts the error body schema into the document even before an operation references it. */
    @Bean
    OpenApiCustomizer problemSchemas() {
        return openApi -> ModelConverters.getInstance()
                .readAll(ApiProblem.class)
                .forEach((name, schema) -> openApi.getComponents().addSchemas(name, schema));
    }
}
