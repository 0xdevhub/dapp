'use client'

import { type ReactNode } from 'react'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'

import AsideNavigation, {
  AsideNavigationNavLink
} from '@/app/components/nav/asideNavigation/AsideNavigation'

import { BanknotesIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'

export type AsetsLayoutProps = {
  children: ReactNode
}

export default function AsetsLayout({ children }: AsetsLayoutProps) {
  const t = useI18n()

  const navLinks: AsideNavigationNavLink[] = [
    {
      href: '/wizard/hybrid/assets/recurring-buy/',
      id: 'vaults',
      icon: <BanknotesIcon width={18} />,
      label: t(Locales.RECURRING_BUY)
    }
  ]

  return <AsideNavigation navLinks={navLinks}>{children}</AsideNavigation>
}
