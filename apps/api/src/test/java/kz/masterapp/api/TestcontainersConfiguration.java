package kz.masterapp.api;

import java.util.Map;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.boot.testcontainers.service.connection.ServiceConnection;
import org.springframework.context.annotation.Bean;
import org.testcontainers.postgresql.PostgreSQLContainer;
import org.testcontainers.utility.DockerImageName;

/** PostgreSQL with PostGIS, the same multi-arch image as infra/docker-compose.yml. */
@TestConfiguration(proxyBeanMethods = false)
public class TestcontainersConfiguration {

    public static final DockerImageName POSTGIS =
            DockerImageName.parse("imresamu/postgis:17-3.5-bookworm").asCompatibleSubstituteFor("postgres");

    @Bean
    @ServiceConnection
    public PostgreSQLContainer postgresContainer() {
        return new PostgreSQLContainer(POSTGIS).withTmpFs(Map.of("/var/lib/postgresql/data", "rw"));
    }
}
