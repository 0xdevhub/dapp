'use client'

import { type ReactNode } from 'react'
import { Header, Footer, Language, Wallet } from '@/app/components'
import { useDarkMode, useIsClient } from 'usehooks-ts'
import classNames from 'classnames'
import { MaintenanceMode } from './components/MaintenanceMode'
import StyledJsxRegistry from '@/app/registry'

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
              'flex min-h-screen flex-col',
              'h-screen overflow-x-hidden text-sm font-medium',
              'bg-stone-100  text-stone-600/70',
              'dark:bg-third-100 dark:text-gray-400'
            )}
          >
            {process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' ? (
              <MaintenanceMode />
            ) : (
              <StyledJsxRegistry>
                <Header.Container />
                <main className='flex-1'>{children}</main>
                <Footer.Container className='py-4' />
              </StyledJsxRegistry>
            )}
          </div>
        </div>
      </Language.Provider>
    </Wallet.Provider>
  )
}
