package kz.masterapp.api.shared.errors;

import org.springframework.http.HttpStatus;

/**
 * A domain error with its HTTP status and code. Modules may throw it directly or extend it with
 * their own reasons; {@link ApiErrorHandler} turns it into a problem detail.
 */
public class ApiException extends RuntimeException {

    private final HttpStatus status;
    private final ErrorCode code;

    public ApiException(HttpStatus status, ErrorCode code, String message) {
        super(message);
        this.status = status;
        this.code = code;
    }

    public HttpStatus status() {
        return status;
    }

    public ErrorCode code() {
        return code;
    }
}
