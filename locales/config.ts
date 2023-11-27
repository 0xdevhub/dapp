export enum Locale {
  PT = 'pt',
  EN = 'en'
}

export const localeConfig = {
  locales: [Locale.PT, Locale.EN],
  defaultLocale: Locale.EN,
  urlMappingStrategy: 'rewriteDefault'
} as const

export default localeConfig
