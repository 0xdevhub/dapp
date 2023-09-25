import type { Metadata } from 'next'

import appConfig from '@/app.config'
import { getI18n } from '@/locales/server'
import { Locales } from '@/locales/locales'

export async function generateMetadata(): Promise<Metadata> {
  const i118n = await getI18n()

  return {
    title: `${appConfig.name} - ${i118n(Locales.WIZARD)}`,
    description: appConfig.meta.description
  }
}

export default function WizardPage() {
  return <div className='p-6'>wizard</div>
}
