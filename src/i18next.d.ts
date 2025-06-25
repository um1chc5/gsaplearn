// import the original type declarations
import { resources } from './lib/i18n'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    // eslint-disable-next-line prettier/prettier
    resources: typeof resources['en']
  }
}
