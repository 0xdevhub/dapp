'use client'

import useWallet from '@/app/lib/wallet/hooks/useWallet'
import { Button, ButtonProps } from '@/app/components/Button'
import { useI18n } from '@/locales/client'
import { useDarkMode, useIsClient } from 'usehooks-ts'

export const AccountConnect = ({ loading, ...props }: ButtonProps) => {
  const t = useI18n()
  const isClient = useIsClient()
  const { isDarkMode } = useDarkMode()

  const {
    connectors: [connector],
    connect,
    isConnecting,
    isReconnecting
  } = useWallet()

  return (
    <Button
      {...props}
      loadingProps={{
        variant: isDarkMode ? 'dark' : 'primary',
        className: 'w-6'
      }}
      type='button'
      key={connector.id}
      onClick={() => connect({ connector })}
      loading={isClient && (loading || isReconnecting || isConnecting)}
      disabled={props.disabled || isConnecting}
    >
      {isClient && (loading || isReconnecting || isConnecting)
        ? t('WALLET.CONNECTING')
        : t('WALLET.CONNECT')}
    </Button>
  )
}

export default AccountConnect
