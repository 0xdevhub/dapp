'use client'

import { type ReactNode } from 'react'
import { useDarkMode, useIsClient } from 'usehooks-ts'
import classNames from 'classnames'
import { MaintenanceMode } from './components/MaintenanceMode'
import StyledJsxRegistry from '@/app/registry'
import { Header, Footer } from '@/app/components'
import { WalletProvider } from '../components/wallet/Provider'
import { LanguageProvider } from '../components/language'

export type BaseLayoutProps = {
  children: ReactNode
  params: { locale: string }
}

export default function BaseLayout({ children, params }: BaseLayoutProps) {
  const { isDarkMode } = useDarkMode()
  const isClient = useIsClient()

  return (
    <WalletProvider>
      <LanguageProvider locale={params.locale}>
        <div className={isClient ? (isDarkMode ? 'dark' : 'light') : 'dark'}>
          <div
            className={classNames(
              'flex min-h-screen flex-col',
              'h-screen overflow-x-hidden text-sm font-medium',
              'bg-stone-100  text-stone-900/70',
              'dark:bg-third-100 dark:text-cyan-50'
            )}
          >
            {process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true' ? (
              <MaintenanceMode />
            ) : (
              <StyledJsxRegistry>
                <Header />
                <main className='flex-1 lg:container'>{children}</main>
                <Footer className='py-4' />
              </StyledJsxRegistry>
            )}
          </div>
        </div>
      </LanguageProvider>
    </WalletProvider>
  )
}
