package kz.masterapp.api.catalog;

import io.swagger.v3.oas.annotations.media.Schema;
import java.util.UUID;

public record CategoryResponse(
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED) UUID id,
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED) String slug,
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED) String nameRu,
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED) String nameKk,
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED,
                description = "an order completes only after an inspection report is published")
        boolean requiresReport) {

    static CategoryResponse from(Category category) {
        return new CategoryResponse(category.getId(), category.getSlug(), category.getNameRu(),
                category.getNameKk(), category.isRequiresReport());
    }
}
