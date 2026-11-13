package kz.masterapp.api.shared.errors;

import io.swagger.v3.oas.annotations.Hidden;
import org.jspecify.annotations.Nullable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ProblemDetail;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

/**
 * The one place that maps errors to problem details (ADR-015). A domain error gets its status,
 * the message as {@code detail} and its {@code code}. Client errors raised by the framework keep
 * the framework's status and text and get {@link ErrorCode#NOT_FOUND} (404) or
 * {@link ErrorCode#INVALID_REQUEST} (any other 4xx).
 */
@Hidden
@RestControllerAdvice
class ApiErrorHandler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(ApiException.class)
    ResponseEntity<ProblemDetail> domain(ApiException e) {
        ProblemDetail body = ProblemDetail.forStatusAndDetail(e.status(), e.getMessage());
        body.setProperty("code", e.code().name());
        return ResponseEntity.status(e.status()).body(body);
    }

    @Override
    protected ResponseEntity<Object> createResponseEntity(@Nullable Object body, HttpHeaders headers,
            HttpStatusCode statusCode, WebRequest request) {
        if (body instanceof ProblemDetail problem && statusCode.is4xxClientError()
                && (problem.getProperties() == null || !problem.getProperties().containsKey("code"))) {
            ErrorCode code = statusCode.value() == 404 ? ErrorCode.NOT_FOUND : ErrorCode.INVALID_REQUEST;
            problem.setProperty("code", code.name());
        }
        return super.createResponseEntity(body, headers, statusCode, request);
    }
}
