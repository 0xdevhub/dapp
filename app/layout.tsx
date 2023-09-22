import './globals.css'

import { type ReactNode } from 'react'
import { Inter } from 'next/font/google'

const font = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900']
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  )
}
