import type { ErrorCode, paths } from "@master-app/api-types";
import createClient from "openapi-fetch";

export const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:8080";

/** Typed client generated from apps/api/openapi.json. Admin sign-in and the token come in F0-9. */
export const api = createClient<paths>({ baseUrl: API_URL });

const messages: Record<ErrorCode | "network", string> = {
  INVALID_REQUEST: "Проверьте введённые данные",
  AUTH_REQUIRED: "Войдите как администратор",
  FORBIDDEN: "Нет доступа",
  NOT_FOUND: "Не найдено",
  INTERNAL_ERROR: "Ошибка сервера",
  network: "Нет соединения с API",
};

export class ApiError extends Error {
  constructor(readonly code: ErrorCode | "network") {
    super(messages[code]);
    this.name = "ApiError";
  }
}

export function toApiError(error: unknown): ApiError {
  const code = (error as { code?: unknown } | null)?.code;
  return typeof code === "string" && code in messages
    ? new ApiError(code as ErrorCode)
    : new ApiError("INTERNAL_ERROR");
}

/** Returns data of a successful call or throws an ApiError. */
export async function unwrap<T>(call: Promise<{ data?: T; error?: unknown }>): Promise<T> {
  let result;
  try {
    result = await call;
  } catch {
    throw new ApiError("network");
  }
  if (result.error !== undefined || result.data === undefined) throw toApiError(result.error);
  return result.data;
}
