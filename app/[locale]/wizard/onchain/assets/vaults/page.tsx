import type { Metadata } from 'next'

import appConfig from '@/app.config'
import { getI18n } from '@/locales/server'
import { Locales } from '@/locales/locales'
import { HeadingNavigation } from '@/app/components/navigation/heading/HeadingNavigation'

export async function generateMetadata(): Promise<Metadata> {
  const i118n = await getI18n()

  return {
    title: `${appConfig.name} - ${i118n(Locales.VAULTS)}`,
    description: appConfig.meta.description
  }
}

export default function VaultsPage() {
  return (
    <div className='flex flex-col space-y-4 p-6'>
      <HeadingNavigation variant='h4' label='Vaults' />
    </div>
  )
}
