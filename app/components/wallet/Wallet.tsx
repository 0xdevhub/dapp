'use client'
import { type HTMLProps } from 'react'
import { useWallet } from '@/app/lib/wallet/hooks'
import { ConnectButton, ConnectButtonProps } from './button/Connect'
import { Avatar, AvatarProps } from './avatar/Avatar'
import { Panel } from './panel'

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
        <Panel>
          {({ onClick }) => (
            <Avatar
              title={address}
              address={address}
              onClick={onClick}
              {...avatarProps}
            />
          )}
        </Panel>
      )}
    </div>
  )
}

export default Wallet
