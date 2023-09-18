'use client'

import { type HTMLProps } from 'react'
import { useWallet } from '@/app/lib/wallet/hooks'
import { Avatar } from '../avatar/Avatar'

export const PanelSelector = (props: HTMLProps<HTMLDivElement>) => {
  const { address } = useWallet()

  return <Avatar title={address} address={address} {...props} />
}
export default PanelSelector
