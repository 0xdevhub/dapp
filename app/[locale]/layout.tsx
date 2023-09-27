'use client'

import { type ReactNode } from 'react'
import { Header, Footer, Language, Wallet } from '@/app/components'
import { useDarkMode, useIsClient } from 'usehooks-ts'
import classNames from 'classnames'
import { MaintenanceMode } from './components/MaintenanceMode'

export type BaseLayoutProps = {
  children: ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const { isDarkMode } = useDarkMode()
  const isClient = useIsClient()

  return (
    <Wallet.Provider>
      <Language.Provider>
        <div className={isClient ? (isDarkMode ? 'dark' : 'light') : 'dark'}>
          <div
            className={classNames(
              'flex min-h-screen flex-col space-y-4',
              'h-screen overflow-x-hidden text-sm font-medium',
              'bg-gradient-radial',
              'from-stone-100 via-stone-200 to-stone-300 text-stone-600/70',
              'dark:from-third-100 dark:via-third-300 dark:to-third-500 dark:text-gray-400'
            )}
          >
            {process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' ? (
              <MaintenanceMode />
            ) : (
              <>
                <Header.Container />
                <main className='flex-1 container'>{children}</main>
                <Footer.Container className='pb-4 text-black/30' />
              </>
            )}
          </div>
        </div>
      </Language.Provider>
    </Wallet.Provider>
  )
}
