import i18n from "i18next";
import en from "../locales/en/translation.json";
import id from "../locales/id/translation.json";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: en,
  },
  id: {
    translation: id,
  },
};

const getInitialLang = (): "en" | "id" => {
  try {
    const params = new URLSearchParams(window.location.search);
    const l = params.get("lang");
    if (l === "en" || l === "id") return l;
  } catch {
    throw new Error();
  }
  return "id";
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLang(),
  fallbackLng: "id", 
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
