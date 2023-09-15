'use client'

import useWallet from '@/app/lib/wallet/hooks/useWallet'
import Button, { ButtonProps } from '@/app/components/Button'
import { useI18n } from '@/locales/client'

export type ConnectButtonProps = ButtonProps
/// bkp:  'rotate-bg bg-gradient-radial from-yellow-400 via-sky-400 to-lime-400'

export const ConnectButton = (props: ConnectButtonProps) => {
  const t = useI18n()
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
      {isConnecting
        ? t('WALLET_CONNECT_CONNECTING_BUTTON_LABEL')
        : t('WALLET_CONNECT_STANDBY_BUTTON_LABEL')}
    </Button>
  )
}

export default ConnectButton
