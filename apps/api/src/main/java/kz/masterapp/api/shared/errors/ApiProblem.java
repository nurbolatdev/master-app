package kz.masterapp.api.shared.errors;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * The body of every error response ({@code application/problem+json}). Only the OpenAPI schema:
 * {@link ApiErrorHandler} and the security handlers write problem details with the same members.
 */
public record ApiProblem(
        @Schema(description = "absent while it is about:blank")
        String type,
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
        String title,
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED)
        int status,
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "human-readable; do not branch on it")
        String detail,
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "the request path")
        String instance,
        @Schema(requiredMode = Schema.RequiredMode.REQUIRED, description = "branch on this")
        ErrorCode code) {
}
