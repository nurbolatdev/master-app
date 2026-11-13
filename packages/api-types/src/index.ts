// Types generated from apps/api/openapi.json with `npm run api:types`. Do not edit schema.ts.
import type { components } from "./schema.js";

export type * from "./schema.js";

/** Body of every error response (`application/problem+json`). */
export type ApiProblem = components["schemas"]["ApiProblem"];

/** Machine-readable reason of an error response; branch on it, never on `detail`. */
export type ErrorCode = components["schemas"]["ErrorCode"];

export type City = components["schemas"]["CityResponse"];
export type Category = components["schemas"]["CategoryResponse"];
