import type { Metadata } from 'next'

import appConfig from '@/app.config'
import { getI18n } from '@/locales/server'
import { Locales } from '@/locales/locales'
import { HomeContainer } from './components/Container'
import { Locale } from '@/locales/config'

export async function generateMetadata(): Promise<Metadata> {
  const i118n = await getI18n()

  return {
    title: `${appConfig.name} - ${i118n(
      Locales.NAVIGATION_MENU_ITEM_LABEL_HOME
    )}`,
    description: appConfig.meta.description
  }
}

export default function Dashboard() {
  return <HomeContainer />
}
