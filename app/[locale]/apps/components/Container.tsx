'use client'

import { useI18n } from '@/locales/client'
import { Heading } from '@/app/components/typography'
import { List } from './list'

export const PageContainer = () => {
  const t = useI18n()

  return (
    <div>
      <section className='flex flex-col space-y-4'>
        <Heading as='h2'>{t('PAGES.APPS.TITLE')}</Heading>
        <List />
      </section>
    </div>
  )
}

export default PageContainer
