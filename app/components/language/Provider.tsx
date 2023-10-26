import { type ReactNode } from 'react'
import { I18nProviderClient } from '@/locales/client'
import localeConfig from '@/locales/config'
import { Loading } from '@/app/components/Loading'

export type LanguageProviderProps = {
  children: ReactNode
  locale?: string
}

export const LanguageProvider = ({
  children,
  locale
}: LanguageProviderProps) => {
  return (
    <I18nProviderClient
      locale={locale || localeConfig.defaultLocale}
      fallback={<Loading />}
    >
      {children}
    </I18nProviderClient>
  )
}

export default LanguageProvider
