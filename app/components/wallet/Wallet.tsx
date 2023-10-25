'use client'

import { type HTMLProps } from 'react'
import { useWallet } from '@/app/lib/wallet/hooks'
import { ButtonConnect } from './button/Connect'
import { Panel } from './panel/Panel'

export const Wallet = ({ tabIndex, ...props }: HTMLProps<HTMLDivElement>) => {
  const { isConnected } = useWallet()

  return (
    <div {...props}>
      {!isConnected ? (
        <ButtonConnect tabIndex={tabIndex} />
      ) : (
        <Panel tabIndex={tabIndex} />
      )}
    </div>
  )
}

export default Wallet
