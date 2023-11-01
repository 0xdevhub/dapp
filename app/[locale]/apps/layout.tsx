'use client'

import { type ReactNode } from 'react'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'
import { AsideNavigation } from '@/app/components/navigation/aside/AsideNavigation'
import { AsideNavigationItemProps } from '@/app/components/navigation/aside/AsideNavigationItem'
import { PuzzlePieceIcon } from '@heroicons/react/24/solid'

export type LayoutProps = {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const t = useI18n()

  const navLinks: AsideNavigationItemProps[] = [
    {
      href: '/apps/',
      icon: <PuzzlePieceIcon width={32} className='w-6 lg:w-4' />,
      label: t(Locales.APPS)
    }
  ]

  return (
    <AsideNavigation navLinks={navLinks} className='h-full w-full'>
      {children}
    </AsideNavigation>
  )
}
