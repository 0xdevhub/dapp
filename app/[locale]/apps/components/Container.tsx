'use client'

import { Locales } from '@/locales/locales'
import { Heading } from '@/app/components/typography/Heading'
import { useI18n } from '@/locales/client'

export const AppContainer = () => {
  const t = useI18n()
  return (
    <div className='p-6'>
      <Heading variant='h2'>{t(Locales.APPS)}</Heading>
    </div>
  )
}

export default AppContainer
