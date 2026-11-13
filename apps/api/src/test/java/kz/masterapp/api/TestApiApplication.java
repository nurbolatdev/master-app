package kz.masterapp.api;

import org.springframework.boot.SpringApplication;

/** Runs the API against a throw-away PostGIS container: ./mvnw spring-boot:test-run */
public class TestApiApplication {

    public static void main(String[] args) {
        SpringApplication.from(ApiApplication::main).with(TestcontainersConfiguration.class).run(args);
    }
}
