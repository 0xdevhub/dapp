'use client'

import { type HTMLProps } from 'react'
import { useWallet } from '@/app/lib/wallet/hooks'
import { Avatar } from '../avatar/Avatar'
import classNames from 'classnames'

export type PanelSelectorProps = HTMLProps<HTMLDivElement> & {
  isOpen?: boolean
}

export const PanelSelector = ({ isOpen, ...props }: PanelSelectorProps) => {
  const { address } = useWallet()

  return (
    <Avatar
      title={address}
      address={address}
      {...props}
      className={classNames(props.className, {
        'opacity-90': isOpen
      })}
    />
  )
}
export default PanelSelector
