'use client'

import { type ReactNode } from 'react'
import { Header } from '@/app/components/header'
import { WalletProvider } from '@/app/components/wallet'
import { LanguageProvider } from '@/app/components/language'
import { useDarkMode, useIsClient } from 'usehooks-ts'
import classNames from 'classnames'
import { MaintenanceMode } from './components/MaintenanceMode'
import { Footer } from '@/app/components/footer/Footer'

export type BaseLayoutProps = {
  children: ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const { isDarkMode } = useDarkMode()
  const isClient = useIsClient()

  return (
    <WalletProvider>
      <div className={isClient ? (isDarkMode ? 'dark' : 'light') : 'dark'}>
        <div
          className={classNames(
            'flex min-h-screen flex-col',
            'h-screen overflow-x-hidden text-sm font-normal',
            'bg-gradient-radial',
            'from-stone-100 via-stone-200 to-stone-300 text-stone-600/70',
            'dark:from-third-100 dark:via-third-300 dark:to-third-500 dark:text-gray-400'
          )}
        >
          {process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' ? (
            <MaintenanceMode />
          ) : (
            <LanguageProvider>
              <Header />
              <main className='flex-1 container'>{children}</main>
              <Footer className='py-12 text-black/30' />
            </LanguageProvider>
          )}
        </div>
      </div>
    </WalletProvider>
  )
}
