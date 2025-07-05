import i18n from 'i18next'
import en from './en.json'
import vi from './vi.json'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
    en: { translation: en },
    vi: { translation: vi },
}


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n

    ; (window as any).i18next = i18n
