'use client'

import { type ReactNode } from 'react'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'
import { AsideNavigation } from '@/app/components/navigation/aside/AsideNavigation'
import { AsideNavigationItemProps } from '@/app/components/navigation/aside/AsideNavigationItem'
import { CommandLineIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid'

export type wizardLayoutProps = {
  children: ReactNode
}

export default function wizardLayout({ children }: wizardLayoutProps) {
  const t = useI18n()

  const navLinks: AsideNavigationItemProps[] = [
    {
      href: '/apps/',
      icon: <PuzzlePieceIcon width={18} />,
      label: t(Locales.APPS)
    },
    {
      href: '/apps/new/',
      icon: <CommandLineIcon width={18} />,
      label: 'New'
    }
  ]

  return (
    <section className='grid h-full'>
      <AsideNavigation navLinks={navLinks} className='h-full'>
        {children}
      </AsideNavigation>
    </section>
  )
}
