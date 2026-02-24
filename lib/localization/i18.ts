import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';


// 1. Import your files
import en from '@/lib/localization/languages/en.json';
import hi from '@/lib/localization/languages/hi.json';
const resources = {
  en: { translation: en },
  hi: { translation: hi },
};


i18n
  .use(initReactI18next)
  .init({
    resources,
    // Get the first language code from the user's device (e.g., "en" or "es")
    lng: Localization.getLocales()[0].languageCode ?? 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });

export default i18n;
