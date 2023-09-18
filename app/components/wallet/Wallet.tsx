'use client'

import { type HTMLProps } from 'react'
import { useWallet } from '@/app/lib/wallet/hooks'
import { ConnectButton } from './button/Connect'
import { Panel } from './panel'

export const Wallet = ({ tabIndex, ...props }: HTMLProps<HTMLDivElement>) => {
  const { isConnected } = useWallet()

  return (
    <div {...props}>
      {!isConnected ? (
        <ConnectButton tabIndex={tabIndex} />
      ) : (
        <Panel tabIndex={tabIndex} />
      )}
    </div>
  )
}

export default Wallet
