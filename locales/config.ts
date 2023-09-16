export enum Locale {
  PT = 'pt',
  EN = 'en'
}

export const localeConfig = {
  locales: [Locale.PT, Locale.EN],
  defaultLocale: Locale.PT
}

export default localeConfig
