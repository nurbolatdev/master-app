package kz.masterapp.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.ConfigurationPropertiesScan;

/**
 * Master App API — a modular monolith (ADR-003). Every direct sub-package is an application
 * module checked by Spring Modulith ({@code ModularityTests}); modules talk through their public
 * types and Spring application events, never through each other's repositories.
 */
@SpringBootApplication
@ConfigurationPropertiesScan
public class ApiApplication {

    public static void main(String[] args) {
        SpringApplication.run(ApiApplication.class, args);
    }
}
