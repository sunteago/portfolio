import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { en, es } from "./locales"

const languages = ["en", "es"]

i18n.use(initReactI18next).init({
  resources: {
    en,
    es,
  },
  whitelist: languages,
  lng: "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
})
