import type { Metadata } from 'next'

import appConfig from '@/app.config'
import { getI18n } from '@/locales/server'
import { PageContainer } from './components/Container'

export async function generateMetadata(): Promise<Metadata> {
  const i118n = await getI18n()

  return {
    title: `${appConfig.name} - ${i118n('PAGES.APPS.TITLE')} demo`,
    description: appConfig.meta.description
  }
}

export default PageContainer
