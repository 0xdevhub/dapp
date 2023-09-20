'use client'

import { type HTMLProps } from 'react'
import { useWallet } from '@/app/lib/wallet/hooks'
import { Avatar } from '../avatar/Avatar'
import classNames from 'classnames'

export type PanelSelectorProps = HTMLProps<HTMLDivElement> & {
  isOpen?: boolean
}

export const PanelSelector = ({
  isOpen,
  className,
  ...props
}: PanelSelectorProps) => {
  const { address } = useWallet()

  return (
    <Avatar
      {...props}
      title={!isOpen ? address : ''}
      address={address}
      className={classNames(className, 'cursor-pointer', {})}
    />
  )
}
export default PanelSelector
