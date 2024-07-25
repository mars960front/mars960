// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../language/eng.json';
import translationRU from '../language/ru.json';

const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  }
};

i18n
  .use(LanguageDetector) // Detect user language
  .use(initReactI18next) // Passes i18n instance to react-i18next
  .init({
    resources,
    lng: 'en', 
    fallbackLng: 'en', // Corrected: added a comma here
    debug: true,
    interpolation: {
      escapeValue: false // React already escapes by default
    }
  });

export default i18n;
