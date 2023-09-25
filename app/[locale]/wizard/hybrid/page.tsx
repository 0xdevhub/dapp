import type { Metadata } from 'next'

import appConfig from '@/app.config'
import { getI18n } from '@/locales/server'
import { Locales } from '@/locales/locales'

export async function generateMetadata(): Promise<Metadata> {
  const i118n = await getI18n()

  return {
    title: `${appConfig.name} - ${i118n(Locales.HYBRID)}`,
    description: appConfig.meta.description
  }
}

export default function HybridPage() {
  return <div>hybrid</div>
}
