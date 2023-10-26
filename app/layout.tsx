import './globals.css'

import { type ReactNode } from 'react'
import { Rubik } from 'next/font/google'

const font = Rubik({
  subsets: ['latin'],
  weight: ['300', '400', '700', '800'],
  preload: true
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={font.className}>{children}</body>
    </html>
  )
}
