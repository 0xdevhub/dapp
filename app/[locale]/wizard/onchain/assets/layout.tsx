'use client'

import { type ReactNode } from 'react'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'
import { AsideNavigation } from '@/app/components/navigation/aside/AsideNavigation'
import { BanknotesIcon, ShoppingBagIcon } from '@heroicons/react/24/outline'
import { AsideNavigationItemProps } from '@/app/components/navigation/aside/AsideNavigationItem'

export type AsetsLayoutProps = {
  children: ReactNode
}

export default function AsetsLayout({ children }: AsetsLayoutProps) {
  const t = useI18n()

  const navLinks: AsideNavigationItemProps[] = [
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
