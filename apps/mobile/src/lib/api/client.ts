import type { ErrorCode, paths } from "@master-app/api-types";
import createClient from "openapi-fetch";

export const API_URL = process.env.EXPO_PUBLIC_API_URL ?? "http://localhost:8080";

/** Typed client generated from apps/api/openapi.json. The access token is added in F0-5. */
export const api = createClient<paths>({ baseUrl: API_URL });

/** Error the UI shows by its code (translated in i18n `errors.*`). */
export class ApiError extends Error {
  constructor(readonly code: ErrorCode | "network") {
    super(code);
    this.name = "ApiError";
  }
}

/** Reads `code` from a problem body; anything unexpected becomes INTERNAL_ERROR. */
export function toApiError(error: unknown): ApiError {
  const code = (error as { code?: unknown } | null)?.code;
  return new ApiError(typeof code === "string" ? (code as ErrorCode) : "INTERNAL_ERROR");
}
