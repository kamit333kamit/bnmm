import * as Localization from 'expo-localization';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define your translation resources
const resources = {
  en: { translation: { welcome: "Hello!" } },
  es: { translation: { welcome: "¡Hola!" } },
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
