import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import English from "./translations/en.json";
import Arabic from "./translations/ar.json";

const resources = {
    en: {
        translation: English,
    },
    ar: {
        translation: Arabic,
    },
}

i18next.use(initReactI18next)
.init({
  resources,
  lng:"ar",
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: "ar",
});

export default i18next;