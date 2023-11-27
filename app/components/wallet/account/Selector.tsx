'use client'

import { type HTMLProps } from 'react'
import { useWallet } from '@/app/lib/wallet/hooks'
import { AccountAvatar } from './Avatar'
import classNames from 'classnames'

export type AccountSelectorProps = HTMLProps<HTMLDivElement> & {
  isOpen?: boolean
}

export const AccountSelector = ({
  isOpen,
  className,
  ...props
}: AccountSelectorProps) => {
  const { address } = useWallet()

  return (
    <AccountAvatar
      {...props}
      title={!isOpen ? address : ''}
      address={address}
      className={classNames(className, 'cursor-pointer ')}
    />
  )
}
export default AccountSelector
