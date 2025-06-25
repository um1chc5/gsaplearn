import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import ENGLISH from '../languages/en.json'

export const resources = {
  en: {
    translation: ENGLISH
  }
} as const

i18n.use(initReactI18next).init({
  lng: 'en',
  resources,
  defaultNS: 'translation'
})
