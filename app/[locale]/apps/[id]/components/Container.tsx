'use client'

import { Locales } from '@/locales/locales'
import { useI18n } from '@/locales/client'
import { Heading } from '@/app/components/typography'

export const PageContainer = () => {
  const t = useI18n()

  return (
    <div>
      <div className='flex flex-col space-y-4'>
        <Heading as='h2'>{t(Locales.APPS)} demo</Heading>
      </div>
    </div>
  )
}

export default PageContainer
