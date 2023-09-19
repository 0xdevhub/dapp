import './globals.css'

import { type ReactNode } from 'react'
import { type Metadata } from 'next'
import { Inter } from 'next/font/google'
import { getCurrentLocale } from '@/locales/server'
import classNames from 'classnames'
import appConfig from '@/app.config'

const font = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `${appConfig.name} - Welcome`,
  description: appConfig.meta.description
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={getCurrentLocale()}>
      <body className={classNames([font.className])}>{children}</body>
    </html>
  )
}
