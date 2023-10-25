export enum Locale {
  PT = 'pt',
  EN = 'en'
}

export const localeConfig = {
  locales: [Locale.PT, Locale.EN],
  defaultLocale: Locale.EN
}

export default localeConfig
