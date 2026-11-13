package kz.masterapp.api.catalog;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import kz.masterapp.api.TestcontainersConfiguration;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.webmvc.test.autoconfigure.AutoConfigureMockMvc;
import org.springframework.context.annotation.Import;
import org.springframework.test.web.servlet.MockMvc;

@SpringBootTest
@AutoConfigureMockMvc
@Import(TestcontainersConfiguration.class)
class CatalogControllerTests {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void categoriesArePublicAndOrdered() throws Exception {
        mockMvc.perform(get("/api/v1/categories"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(2))
                .andExpect(jsonPath("$[0].slug").value("pre-purchase-inspection"))
                .andExpect(jsonPath("$[0].requiresReport").value(true))
                .andExpect(jsonPath("$[1].slug").value("auto-electrician"))
                .andExpect(jsonPath("$[1].nameKk").isNotEmpty());
    }

    @Test
    void citiesArePublic() throws Exception {
        mockMvc.perform(get("/api/v1/cities"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].slug").value("almaty"))
                .andExpect(jsonPath("$[0].nameRu").value("Алматы"));
    }
}
