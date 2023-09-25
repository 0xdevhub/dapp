'use client'

import { type ReactNode } from 'react'
import { Heading } from '@/app/components/Heading'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'
import AsideNavigation, {
  AsideNavigationNavLink
} from '@/app/components/nav/asideNavigation/AsideNavigation'
import { GlobeAltIcon, SquaresPlusIcon } from '@heroicons/react/24/outline'

export type wizardLayoutProps = {
  children: ReactNode
}

export default function wizardLayout({ children }: wizardLayoutProps) {
  const t = useI18n()

  const navLinks: AsideNavigationNavLink[] = [
    {
      href: '/wizard/onchain/',
      id: 'onchain',
      icon: <GlobeAltIcon width={18} />,
      label: t(Locales.ONCHAIN)
    },
    {
      href: '/wizard/hybrid/',
      id: 'hybrid',
      icon: <SquaresPlusIcon width={18} />,
      label: t(Locales.HYBRID)
    }
  ]

  return (
    <section className='flex flex-col space-y-4'>
      <Heading variant='h2'>{t(Locales.WIZARD)}</Heading>
      <AsideNavigation navLinks={navLinks}>{children}</AsideNavigation>
    </section>
  )
}
