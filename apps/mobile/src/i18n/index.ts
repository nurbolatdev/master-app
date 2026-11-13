import { getLocales } from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import kk from "./kk.json";
import ru from "./ru.json";

export const resources = { ru: { translation: ru }, kk: { translation: kk } } as const;
export type Language = keyof typeof resources;

/** Kazakh if the phone is in Kazakh, Russian otherwise (FEAT-013). */
export function pickLanguage(codes: readonly (string | null | undefined)[]): Language {
  return codes.some((c) => c?.toLowerCase().startsWith("kk")) ? "kk" : "ru";
}

if (!i18n.isInitialized) {
  void i18n.use(initReactI18next).init({
    resources,
    lng: pickLanguage(getLocales().map((l) => l.languageCode)),
    fallbackLng: "ru",
    interpolation: { escapeValue: false },
  });
}

export default i18n;
