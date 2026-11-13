package kz.masterapp.api.catalog;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.UUID;

public record CityResponse(
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED) UUID id,
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED) String slug,
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED) String nameRu,
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED) String nameKk) {

    static CityResponse from(City city) {
        return new CityResponse(city.getId(), city.getSlug(), city.getNameRu(), city.getNameKk());
    }
}
