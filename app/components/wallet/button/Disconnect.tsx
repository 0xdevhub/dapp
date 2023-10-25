'use client'

import useWallet from '@/app/lib/wallet/hooks/useWallet'
import { Button, ButtonProps } from '@/app/components/Button'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'

export const ButtonDisconnect = (props: ButtonProps) => {
  const { disconnect } = useWallet()
  const t = useI18n()

  return (
    <Button type='button' onClick={() => disconnect()} {...props}>
      {t(Locales.DISCONNECT)}
    </Button>
  )
}

export default ButtonDisconnect
