import type { ReactNode } from 'react'
import { WagmiConfig } from 'wagmi'
import config from '@/app/lib/wallet/config'

type WalletProviderProps = {
  children: ReactNode
}

const WaleltProvider = ({ children }: WalletProviderProps) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>
}

export default WaleltProvider
