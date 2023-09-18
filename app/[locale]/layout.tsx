'use client'

import { type ReactNode } from 'react'

import { Header } from '@/app/components/header'
import { WalletProvider } from '@/app/components/wallet'
import { StyledJsxRegistry } from '@/app/registry'
import { LanguageProvider } from '@/app/components/Language'
import { useDarkMode } from 'usehooks-ts'
import classNames from 'classnames'

export type BaseLayoutProps = {
  children: ReactNode
}

export default function BaseLayout({ children }: BaseLayoutProps) {
  const { isDarkMode } = useDarkMode(true)
  return (
    <LanguageProvider>
      <WalletProvider>
        <StyledJsxRegistry>
          <div
            className={classNames({
              dark: isDarkMode
            })}
          >
            <Header className='min-h-[4.5rem] py-2 lg:py-4' />
            <main className='my-16'>{children}</main>
          </div>
        </StyledJsxRegistry>
      </WalletProvider>
    </LanguageProvider>
  )
}
