import { describe, expect, it } from "@jest/globals";

import { ApiError, toApiError } from "@/lib/api/client";

describe("toApiError", () => {
  it("keeps the code of a problem body", () => {
    expect(toApiError({ code: "NOT_FOUND", status: 404 }).code).toBe("NOT_FOUND");
  });

  it("turns anything else into INTERNAL_ERROR", () => {
    expect(toApiError(undefined).code).toBe("INTERNAL_ERROR");
    expect(toApiError("boom")).toBeInstanceOf(ApiError);
  });
});
