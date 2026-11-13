package kz.masterapp.api.shared.security;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import kz.masterapp.api.shared.errors.ErrorCode;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.security.web.access.AccessDeniedHandler;

/** 401 and 403 from the security filters in the same problem format as {@code ApiErrorHandler}. */
final class ProblemResponses {

    private ProblemResponses() {
    }

    static AuthenticationEntryPoint unauthorized() {
        return (request, response, e) -> write(request, response, 401, "Unauthorized",
                "Sign in: the token is missing, invalid or expired", ErrorCode.AUTH_REQUIRED);
    }

    static AccessDeniedHandler forbidden() {
        return (request, response, e) -> write(request, response, 403, "Forbidden",
                "Not allowed for this account", ErrorCode.FORBIDDEN);
    }

    private static void write(HttpServletRequest request, HttpServletResponse response, int status,
            String title, String detail, ErrorCode code) throws IOException {
        response.setStatus(status);
        response.setContentType("application/problem+json");
        response.setCharacterEncoding("UTF-8");
        response.getWriter().write("{\"title\":\"" + title + "\",\"status\":" + status
                + ",\"detail\":\"" + detail + "\",\"instance\":\"" + escape(request.getRequestURI())
                + "\",\"code\":\"" + code.name() + "\"}");
    }

    private static String escape(String value) {
        return value.replace("\\", "\\\\").replace("\"", "\\\"");
    }
}
