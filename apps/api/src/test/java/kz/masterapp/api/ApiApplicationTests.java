package kz.masterapp.api;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.annotation.Import;
import org.springframework.jdbc.core.JdbcTemplate;

@SpringBootTest
@Import(TestcontainersConfiguration.class)
class ApiApplicationTests {

    @Autowired
    private JdbcTemplate jdbc;

    @Test
    void contextLoadsAndMigrationsRan() {
        assertThat(jdbc.queryForObject("select count(*) from category", Integer.class)).isEqualTo(2);
    }

    @Test
    void postgisIsInstalled() {
        assertThat(jdbc.queryForObject("select postgis_version()", String.class)).isNotBlank();
    }
}
