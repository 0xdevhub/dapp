'use client'

import { type ReactNode } from 'react'

import { Header } from '@/app/components/header'
import { WalletProvider } from '@/app/components/wallet'
import { StyledJsxRegistry } from '@/app/registry'
import { LanguageProvider } from '@/app/components/language'
import { useDarkMode, useIsClient } from 'usehooks-ts'
import classNames from 'classnames'

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
                // 'bg-zinc-300 text-stone-500',
                'bg-gradient-radial',
                'bg-zinc-300  from-zinc-100 to-zinc-400/60 text-stone-500/70',
                'dark:bg-dark-blue dark:from-dark-green/60 dark:to-dark-blue dark:text-gray-400'
              )}
            >
              <Header />
              <main className='container'>{children}</main>
            </div>
          </div>
        </StyledJsxRegistry>
      </WalletProvider>
    </LanguageProvider>
  )
}
