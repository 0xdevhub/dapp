'use client'

import useWallet from '@/app/lib/wallet/hooks/useWallet'
import Button, { ButtonProps } from '@/app/components/Button'

export type ConnectButtonProps = ButtonProps
/// bkp:  'rotate-bg bg-gradient-radial from-yellow-400 via-sky-400 to-lime-400'

export const ConnectButton = ({ children, ...props }: ConnectButtonProps) => {
  const {
    connectors: [connector],
    connect,
    isConnecting
  } = useWallet()

  return (
    <Button
      loadingProps={{
        variant: isConnecting ? 'dark' : 'default',
        className: 'w-8'
      }}
      className='w-full justify-center rounded-md'
      type='button'
      key={connector.id}
      onClick={() => connect({ connector })}
      {...props}
      loading={props.loading || isConnecting}
      disabled={props.disabled || isConnecting}
    >
      {children || 'Acessar'}
    </Button>
  )
}

export default ConnectButton
