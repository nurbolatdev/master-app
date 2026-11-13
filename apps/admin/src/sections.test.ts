import { describe, expect, it } from "vitest";

import { sectionByPath, sections } from "./sections";

describe("sections", () => {
  it("have unique paths that start with a slash", () => {
    const paths = sections.map((s) => s.path);
    expect(new Set(paths).size).toBe(paths.length);
    for (const p of paths) expect(p.startsWith("/")).toBe(true);
  });

  it("start with the dashboard at /", () => {
    expect(sections[0]?.path).toBe("/");
    expect(sectionByPath("/reference")?.title).toBe("Справочники");
    expect(sectionByPath("/missing")).toBeUndefined();
  });
});
