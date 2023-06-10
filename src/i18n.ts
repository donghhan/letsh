import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import th from "./locales/th/translation.json";

export const resources = {
  en: {
    translation: en,
  },
  th: {
    translation: th,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init(
    {
      debug: true,
      fallbackLng: "en",
      interpolation: { escapeValue: false },
      resources,
    },
    function (error: any) {
      if (error) console.error(error);
    }
  );

export default i18n;
