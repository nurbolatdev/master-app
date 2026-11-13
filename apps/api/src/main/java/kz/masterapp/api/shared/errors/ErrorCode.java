package kz.masterapp.api.shared.errors;

import io.swagger.v3.oas.annotations.media.Schema;

/**
 * Machine-readable reason of an error response. Clients translate by this code (ru/kk), never by
 * {@code detail}. Add a constant together with its translations in the mobile app and the admin.
 */
@Schema(enumAsRef = true, description = "machine-readable reason of an error response")
public enum ErrorCode {
    /** Framework and request checks: validation, malformed body, wrong parameters. */
    INVALID_REQUEST,
    /** No token, or the token is invalid or expired. */
    AUTH_REQUIRED,
    /** The token is valid but the role or owner does not match. */
    FORBIDDEN,
    /** Nothing at this path or with this id. */
    NOT_FOUND,
    /** Unexpected server error. */
    INTERNAL_ERROR
}
