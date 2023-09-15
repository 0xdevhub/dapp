'use client'
import { type HTMLProps } from 'react'
import { useWallet } from '@/app/lib/wallet/hooks'
import { ConnectButton, ConnectButtonProps } from './button/Connect'
import { AvatarProps } from './avatar/Avatar'
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
  const { isConnected, isConnecting } = useWallet()

  return (
    <div {...props}>
      {!isConnected ? (
        <ConnectButton {...connectButtonProps}>
          {isConnecting && 'Acessando'}
        </ConnectButton>
      ) : (
        <Panel avatarProps={avatarProps} />
      )}
    </div>
  )
}

export default Wallet
