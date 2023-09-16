import { type ReactNode } from 'react'

import { Header } from '@/app/components/header'
import { WalletProvider } from '@/app/components/wallet'
import StyledJsxRegistry from '@/app/registry'
import { LanguageProvider } from '@/app/components/Language'

export default function BaseLayout({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <WalletProvider>
        <StyledJsxRegistry>
          <Header className='py-2 lg:py-4' />
          <main className='my-16'>{children}</main>
        </StyledJsxRegistry>
      </WalletProvider>
    </LanguageProvider>
  )
}
