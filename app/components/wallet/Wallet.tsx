'use client'

import { useWallet } from '@/app/lib/wallet'
import { WalletAvatar } from './avatar'
import { WalletConnectButton } from './buttons'

export const Wallet = () => {
  const { isConnected, address } = useWallet()

  return (
    <>
      {!isConnected ? (
        <WalletConnectButton />
      ) : (
        <WalletAvatar title={address} address={address} />
      )}
    </>
  )
}

export default Wallet
