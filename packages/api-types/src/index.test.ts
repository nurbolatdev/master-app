import { describe, expect, expectTypeOf, it } from "vitest";
import type { ApiProblem, Category, City, ErrorCode, paths } from "./index.js";

describe("generated api types", () => {
  it("types the public catalog endpoints", () => {
    type Categories = paths["/api/v1/categories"]["get"]["responses"][200]["content"]["application/json"];
    expectTypeOf<Categories>().toEqualTypeOf<Category[]>();
    type Cities = paths["/api/v1/cities"]["get"]["responses"][200]["content"]["application/json"];
    expectTypeOf<Cities>().toEqualTypeOf<City[]>();
    expect(true).toBe(true);
  });

  it("types a category with required fields", () => {
    expectTypeOf<Category["slug"]>().toEqualTypeOf<string>();
    expectTypeOf<Category["requiresReport"]>().toEqualTypeOf<boolean>();
    expect(true).toBe(true);
  });

  it("types the error body and its closed list of codes", () => {
    expectTypeOf<ApiProblem["code"]>().toEqualTypeOf<ErrorCode>();
    expectTypeOf<"AUTH_REQUIRED">().toExtend<ErrorCode>();
    expect(true).toBe(true);
  });
});
