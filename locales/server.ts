import { createI18nServer } from 'next-international/server'
import pt from './pt'

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } =
  createI18nServer(
    {
      pt: () => import('./pt'),
      en: () => import('./en')
    },
    {
      // Uncomment to use custom segment name
      // segmentName: 'locale',
      // Uncomment to set fallback locale
      fallbackLocale: pt
    }
  )
