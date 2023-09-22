'use client'
import { Heading } from '@/app/components/Heading'
import { Locales } from '@/locales/locales'
import { useI18n } from '@/locales/client'
import WizardStepper from './Stepper'

export const WizardContainer = () => {
  const t = useI18n()

  return (
    <section className='flex flex-col space-y-12'>
      <Heading variant='h2'>{t(Locales.HEADING_WIZARD_TITLE)}</Heading>
      <div>
        <WizardStepper />
      </div>
    </section>
  )
}

export default WizardContainer
