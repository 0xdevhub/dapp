'use client'

import { type HTMLProps } from 'react'
import { useWallet } from '@/app/lib/wallet/hooks'
import { Avatar, AvatarProps } from '../avatar/Avatar'

type PanelProps = HTMLProps<HTMLDivElement> & {
  avatarProps?: AvatarProps
  isOpen?: boolean
  onClick?: () => void
}

export const PanelSelector = ({
  avatarProps,
  onClick,
  isOpen,
  ...props
}: PanelProps) => {
  const { address } = useWallet()

  return (
    <div {...props}>
      <Avatar
        title={address}
        address={address}
        onClick={onClick}
        {...avatarProps}
      />
    </div>
  )
}
export default PanelSelector
