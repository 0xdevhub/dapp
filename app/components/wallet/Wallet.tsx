'use client'

import { type HTMLProps } from 'react'
import { useWallet } from '@/app/lib/wallet/hooks'
import { AccountConnect } from './account/Connect'
import { Account } from './account/Account'

export const Wallet = (props: HTMLProps<HTMLDivElement>) => {
  const { isConnected } = useWallet()

  return <div {...props}>{!isConnected ? <AccountConnect /> : <Account />}</div>
}

export default Wallet
