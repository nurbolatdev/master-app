/**
 * Cross-cutting infrastructure every module may use: error format, security, OpenAPI.
 * Open module: its sub-packages are visible to all other modules.
 */
@org.springframework.modulith.ApplicationModule(
        displayName = "Shared",
        type = org.springframework.modulith.ApplicationModule.Type.OPEN)
package kz.masterapp.api.shared;
