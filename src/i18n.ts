// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      navbar: {
        home: "Home",
        about: "About",
        services: "Services",
        OurWork: "Our Work",
        expertise: "Our Expertise",
      },
    },
  },
  id: {
    translation: {
      navbar: {
        home: "Beranda",
        about: "Tentang",
        services: "Layanan",
        OurWork: "Pekerjaan Kami",
        expertise: "Keahlian Kami",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "id", // bahasa default
  fallbackLng: "en", // kalau key tidak ada
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
