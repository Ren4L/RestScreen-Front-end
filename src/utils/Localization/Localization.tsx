import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import Ru from "./Ru.json";
import En from "./En.json";

const resources = {
    EN: {
        translation: En
    },
    RU: {
        translation: Ru
    }
};

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        debug: false,
        detection: {
            order: ['localStorage', 'cookie'],
            caches: ['localStorage', 'cookie']
        },
        interpolation: {
            escapeValue: false
        }
    }).then();

export default i18n;