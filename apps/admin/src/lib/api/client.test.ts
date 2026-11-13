import { describe, expect, it } from "vitest";

import { ApiError, toApiError, unwrap } from "./client";

describe("api client helpers", () => {
  it("maps a problem body to its code and message", () => {
    const e = toApiError({ code: "FORBIDDEN", status: 403 });
    expect(e.code).toBe("FORBIDDEN");
    expect(e.message).toBe("Нет доступа");
  });

  it("maps unknown errors to INTERNAL_ERROR", () => {
    expect(toApiError({ code: "SOMETHING_NEW" }).code).toBe("INTERNAL_ERROR");
    expect(toApiError(null).code).toBe("INTERNAL_ERROR");
  });

  it("unwrap returns data or throws", async () => {
    await expect(unwrap(Promise.resolve({ data: [1, 2] }))).resolves.toEqual([1, 2]);
    await expect(unwrap(Promise.resolve({ error: { code: "NOT_FOUND" } }))).rejects.toBeInstanceOf(ApiError);
    await expect(unwrap(Promise.reject(new TypeError("fetch failed")))).rejects.toMatchObject({ code: "network" });
  });
});
