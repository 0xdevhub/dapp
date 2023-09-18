'use client'

import useWallet from '@/app/lib/wallet/hooks/useWallet'
import { Button, ButtonProps } from '@/app/components/Button'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'

export const DisconnectButton = (props: ButtonProps) => {
  const { disconnect } = useWallet()
  const t = useI18n()

  return (
    <Button
      className='w-full justify-center space-x-2 rounded-md'
      type='button'
      onClick={() => disconnect()}
      {...props}
    >
      {t(Locales.WALLET_DESCONNECT_BUTTON_LABEL)}
    </Button>
  )
}

export default DisconnectButton
