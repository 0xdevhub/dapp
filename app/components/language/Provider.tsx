import { type ReactNode } from 'react'
import { I18nProviderClient } from '@/locales/client'
import localeConfig from '@/locales/config'

export type LanguageProviderProps = {
  children: ReactNode
  locale?: string
}

export const LanguageProvider = ({
  children,
  locale
}: LanguageProviderProps) => {
  return (
    <I18nProviderClient locale={locale || localeConfig.defaultLocale}>
      {children}
    </I18nProviderClient>
  )
}

export default LanguageProvider

// import { ReactElement } from 'react'
// import { I18nProviderClient } from '@/locales/client'

// export default function SubLayout({
//   params: { locale },
//   children
// }: {
//   params: { locale: string }
//   children: ReactElement
// }) {
//   return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
// }
