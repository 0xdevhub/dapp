'use client'
import { Heading } from '@/app/components/Heading'
import { Locales } from '@/locales/locales'
import { useI18n } from '@/locales/client'

export const HomeContainer = () => {
  const t = useI18n()

  return (
    <section className='my-2 lg:my-6'>
      <Heading variant='h2'>{t(Locales.HEADING_HOME_TITLE)}</Heading>
    </section>
  )
}

export default HomeContainer
