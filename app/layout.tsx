import { ReactNode } from 'react'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

import appConfig from '@/app.config'
import { Header } from '@/app/components/header'
import classNames from 'classnames'

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
          'h-screen bg-dark-blue bg-gradient-radial from-dark-green/60 to-dark-blue text-white',
          'container'
        ])}
      >
        <Header className='py-2 lg:py-4' />
        <main className='my-2'>{children}</main>
      </body>
    </html>
  )
}
