'use client'

import { type ReactNode } from 'react'
import { useDarkMode, useIsClient } from 'usehooks-ts'
import classNames from 'classnames'
import { Registry } from '@/app/registry'
import { Header, Footer } from '@/app/components'
import { Provider as WalletProvider } from '@/app/components/wallet'
import { Provider as LanguageProvider } from '@/app/components/language'
import { ApolloProvider } from '@apollo/client'
import { client } from '@/app/headless/thegraph/client'

export type BaseLayoutProps = {
  children: ReactNode
  params: { locale: string }
}

export default function BaseLayout({ children, params }: BaseLayoutProps) {
  const { isDarkMode } = useDarkMode()
  const isClient = useIsClient()

  return (
    <ApolloProvider client={client}>
      <WalletProvider>
        <LanguageProvider locale={params.locale}>
          <Registry>
            <div
              className={isClient ? (isDarkMode ? 'dark' : 'light') : 'dark'}
            >
              <div
                className={classNames(
                  'flex min-h-screen flex-col',
                  'h-screen overflow-x-hidden text-sm font-medium',
                  'bg-stone-100  text-black/70',
                  'dark:bg-third-100 dark:text-cyan-50'
                )}
              >
                <Header />
                <main className='flex-1 py-6 container'>{children}</main>
                <Footer className='py-4' />
              </div>
            </div>
          </Registry>
        </LanguageProvider>
      </WalletProvider>
    </ApolloProvider>
  )
}
