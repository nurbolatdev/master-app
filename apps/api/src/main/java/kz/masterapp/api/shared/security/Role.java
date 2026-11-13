package kz.masterapp.api.shared.security;

/** Roles of an account; one account may hold several (ADR-008). Sent in the {@code roles} claim. */
public enum Role {
    CLIENT,
    SPECIALIST,
    ADMIN;

    /** Spring Security authority name, e.g. {@code ROLE_ADMIN}. */
    public String authority() {
        return "ROLE_" + name();
    }
}
