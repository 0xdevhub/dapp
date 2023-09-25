'use client'

import { type ReactNode } from 'react'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'

import AsideNavigation, {
  AsideNavigationNavLink
} from '@/app/components/nav/asideNavigation/AsideNavigation'

import { CurrencyDollarIcon } from '@heroicons/react/24/solid'

export type wizardLayoutProps = {
  children: ReactNode
}

export default function wizardLayout({ children }: wizardLayoutProps) {
  const t = useI18n()

  const navLinks: AsideNavigationNavLink[] = [
    {
      href: '/wizard/onchain/assets/',
      id: 'assets',
      icon: <CurrencyDollarIcon width={24} />,
      label: t(Locales.NAVIGATION_WIZARD_ITEM_LABEL_ASSETS)
    }
  ]

  return <AsideNavigation navLinks={navLinks}>{children}</AsideNavigation>
}
