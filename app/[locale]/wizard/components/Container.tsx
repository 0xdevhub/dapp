'use client'
import { Heading } from '@/app/components/Heading'
import { Locales } from '@/locales/locales'
import { useI18n } from '@/locales/client'

export const WizardContainer = () => {
  const t = useI18n()

  return (
    <section className='my-2 lg:my-6'>
      <Heading variant='h2' className='text-center'>
        {t(Locales.HEADING_WIZARD_TITLE)}
      </Heading>
    </section>
  )
}

export default WizardContainer
