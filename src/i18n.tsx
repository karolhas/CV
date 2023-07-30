import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import common_en from "./locales/en/translation.json";
import common_pl from "./locales/pl/translation.json";

const resources = {
  en: { common: common_en },
  pl: { common: common_pl },
};

const options = {
  order: ["querystring", "navigator"],
  lookupQuerystring: "lng",
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    detection: options,
    resources,
    ns: ["common"],
    fallbackLng: "en",
    supportedLngs: ["en", "pl"],

    interpolation: {
      escapeValue: false,
    },
    debug: false,
  });

export default i18n;
