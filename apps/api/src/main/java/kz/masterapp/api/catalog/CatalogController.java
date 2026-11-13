package kz.masterapp.api.catalog;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirements;
import io.swagger.v3.oas.annotations.tags.Tag;
import java.util.List;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1")
@Tag(name = "catalog", description = "Reference data: cities and categories")
class CatalogController {

    private final CatalogService catalog;

    CatalogController(CatalogService catalog) {
        this.catalog = catalog;
    }

    @GetMapping(value = "/cities", produces = MediaType.APPLICATION_JSON_VALUE)
    @SecurityRequirements
    @Operation(operationId = "listCities", summary = "Cities where the platform works")
    List<CityResponse> cities() {
        return catalog.cities();
    }

    @GetMapping(value = "/categories", produces = MediaType.APPLICATION_JSON_VALUE)
    @SecurityRequirements
    @Operation(operationId = "listCategories", summary = "Service categories")
    List<CategoryResponse> categories() {
        return catalog.categories();
    }
}
