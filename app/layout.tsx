import './globals.css'

import { type ReactNode } from 'react'
import { Rubik } from 'next/font/google'
import { getCurrentLocale } from '@/locales/server'

const font = Rubik({
  subsets: ['latin'],
  weight: ['400'],
  preload: true
})

const currentLocale = getCurrentLocale()

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang={currentLocale}>
      <body className={font.className}>{children}</body>
    </html>
  )
}
