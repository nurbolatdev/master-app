import { describe, expect, it } from "@jest/globals";

import { pickLanguage } from "@/i18n";
import kk from "@/i18n/kk.json";
import ru from "@/i18n/ru.json";

function keys(obj: object, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([k, v]) =>
    typeof v === "object" && v !== null ? keys(v, `${prefix}${k}.`) : [`${prefix}${k}`],
  );
}

describe("i18n", () => {
  it("has the same keys in Russian and Kazakh", () => {
    expect(keys(kk).sort()).toEqual(keys(ru).sort());
  });

  it("translates every API error code", () => {
    for (const code of ["INVALID_REQUEST", "AUTH_REQUIRED", "FORBIDDEN", "NOT_FOUND", "INTERNAL_ERROR", "network"]) {
      expect(ru.errors).toHaveProperty(code);
    }
  });

  it("picks Kazakh only when the phone is in Kazakh", () => {
    expect(pickLanguage(["kk", "ru"])).toBe("kk");
    expect(pickLanguage(["ru"])).toBe("ru");
    expect(pickLanguage(["en", null])).toBe("ru");
  });
});
