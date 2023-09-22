'use client'

import { type ReactNode } from 'react'

import { Header } from '@/app/components/header'
import { WalletProvider } from '@/app/components/wallet'
import { StyledJsxRegistry } from '@/app/registry'
import { LanguageProvider } from '@/app/components/language'
import { useDarkMode, useIsClient } from 'usehooks-ts'
import classNames from 'classnames'
import MaintenanceMode from './components/MaintenanceMode'

export type BaseLayoutProps = {
  children: ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const { isDarkMode } = useDarkMode()
  const isClient = useIsClient()

  return (
    <LanguageProvider>
      <WalletProvider>
        <StyledJsxRegistry>
          <div className={!isClient ? 'dark' : isDarkMode ? 'dark' : 'light'}>
            <div
              className={classNames(
                'h-screen overflow-x-hidden text-sm font-normal',
                'bg-gradient-radial',
                'from-stone-100 via-stone-200 to-stone-300 text-stone-600/70',
                'dark:from-third-100 dark:via-third-300 dark:to-third-500 dark:text-gray-400'
              )}
            >
              {process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' ? (
                <MaintenanceMode />
              ) : (
                <>
                  <Header />
                  <main className='container'>{children}</main>
                </>
              )}
            </div>
          </div>
        </StyledJsxRegistry>
      </WalletProvider>
    </LanguageProvider>
  )
}
