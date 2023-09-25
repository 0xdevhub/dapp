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
      href: '/wizard/onchain/assets/vaults/',
      id: 'vaults',
      icon: <BanknotesIcon width={18} />,
      label: t(Locales.VAULTS)
    },
    {
      href: '/wizard/onchain/assets/presale/',
      id: 'presale',
      icon: <ShoppingBagIcon width={18} />,
      label: t(Locales.PRESALE)
    }
  ]

  return <AsideNavigation navLinks={navLinks}>{children}</AsideNavigation>
}
