import { type ReactNode } from 'react'
import { I18nProviderClient } from '@/locales/client'

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  return <I18nProviderClient locale='en'>{children}</I18nProviderClient>
}

export default LanguageProvider
