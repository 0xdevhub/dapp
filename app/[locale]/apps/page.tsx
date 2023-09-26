import type { Metadata } from 'next'

import appConfig from '@/app.config'
import { getI18n } from '@/locales/server'
import { Locales } from '@/locales/locales'
import { AppContainer } from './components/Container'

export async function generateMetadata(): Promise<Metadata> {
  const i118n = await getI18n()

  return {
    title: `${appConfig.name} - ${i118n(Locales.APPS)}`,
    description: appConfig.meta.description
  }
}

export default function WizardPage() {
  return <AppContainer />
}
