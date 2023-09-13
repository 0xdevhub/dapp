'use client'

import { WalletAvatar } from '@/app/components/wallet/avatar'
import { WalletConnectButton } from '@/app/components/wallet/buttons'
import { useWallet } from '@/app/lib/wallet'

export const Wallet = () => {
  const { isConnected } = useWallet()
  return <>{isConnected ? <WalletConnectButton /> : <WalletAvatar />}</>
}

export default Wallet
