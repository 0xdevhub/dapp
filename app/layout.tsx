import './globals.css'

import { type ReactNode } from 'react'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import classNames from 'classnames'
import appConfig from '@/app.config'
import { Header } from '@/app/components/header'
import { WalletProvider } from '@/app/components/wallet'
import StyledJsxRegistry from './registry'
import { LanguageProvider } from '@/app/components/Language'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${appConfig.name} - Welcome`,
  description: appConfig.meta.description
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body
        className={classNames([
          inter.className,
          'h-screen bg-dark-blue bg-gradient-radial from-dark-green/60 to-dark-blue ',
          'text-sm font-normal container'
        ])}
      >
        <LanguageProvider>
          <WalletProvider>
            <StyledJsxRegistry>
              <Header className='py-2 lg:py-4' />
              <main className='my-16'>{children}</main>
            </StyledJsxRegistry>
          </WalletProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
