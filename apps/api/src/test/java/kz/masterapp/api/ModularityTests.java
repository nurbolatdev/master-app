package kz.masterapp.api;

import org.junit.jupiter.api.Test;
import org.springframework.modulith.core.ApplicationModules;

/** Module boundaries (ADR-003): no cycles, no access to another module's internals. */
class ModularityTests {

    private final ApplicationModules modules = ApplicationModules.of(ApiApplication.class);

    @Test
    void modulesRespectBoundaries() {
        modules.verify();
    }
}
