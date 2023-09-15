'use client'

import { pt } from '@/locales'
import { I18nProviderClient } from '@/locales/client'
import { type ReactNode } from 'react'

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  return <I18nProviderClient fallbackLocale={pt}>{children}</I18nProviderClient>
}

export default LanguageProvider
