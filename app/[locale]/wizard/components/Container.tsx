'use client'
import { Heading } from '@/app/components/Heading'
import { Locales } from '@/locales/locales'
import { useI18n } from '@/locales/client'
import { AsideNavigation } from '@/app/components/steps/asideNavigation/AsideNavigation'

export const WizardContainer = () => {
  const t = useI18n()

  return (
    <section className='flex flex-col space-y-12'>
      <Heading variant='h2'>{t(Locales.HEADING_WIZARD_TITLE)}</Heading>
      <div>
        <AsideNavigation />
      </div>
    </section>
  )
}

export default WizardContainer
