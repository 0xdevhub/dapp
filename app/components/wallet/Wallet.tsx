'use client'
import { type HTMLProps } from 'react'
import { useWallet } from '@/app/lib/wallet'
import { ConnectButton, ConnectButtonProps } from './button/Connect'
import { Avatar, AvatarProps } from './avatar/Avatar'
import Menu from './menu/Menu'

type WalletProps = HTMLProps<HTMLDivElement> & {
  connectButtonProps?: ConnectButtonProps
  avatarProps?: AvatarProps
}

export const Wallet = ({
  connectButtonProps,
  avatarProps,
  ...props
}: WalletProps) => {
  const { isConnected, address, isConnecting } = useWallet()

  return (
    <div {...props}>
      {!isConnected ? (
        <ConnectButton {...connectButtonProps}>
          {isConnecting && 'Acessando'}
        </ConnectButton>
      ) : (
        <Menu>
          {({ onClick }) => (
            <Avatar
              title={address}
              address={address}
              onClick={onClick}
              {...avatarProps}
            />
          )}
        </Menu>
      )}
    </div>
  )
}

export default Wallet
