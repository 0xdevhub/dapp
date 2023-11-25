'use client'

import { useI18n } from '@/locales/client'
import { Heading } from '@/app/components/typography'

export const PageContainer = () => {
  const t = useI18n()

  return (
    <div>
      <div className='flex flex-col space-y-4'>
        <Heading as='h2'>{t('PAGES.APPS.TITLE')} demo</Heading>
      </div>
    </div>
  )
}

export default PageContainer
