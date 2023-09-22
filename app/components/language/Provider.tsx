import { type ReactNode } from 'react'
import { pt } from '@/locales'
import { I18nProviderClient } from '@/locales/client'

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  return <I18nProviderClient fallbackLocale={pt}>{children}</I18nProviderClient>
}

export default LanguageProvider
