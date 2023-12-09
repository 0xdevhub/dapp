'use client'

import { Button } from '@/app/components'
import { ButtonProps } from '@/app/components/Button'
import AccountConnect from '@/app/components/wallet/account/Connect'
import { Chain } from '@/app/config/types'
import { useNetwork, useWallet } from '@/app/lib/wallet/hooks'
import { useI18n } from '@/locales/client'

export type NetworkSwitchProps = ButtonProps & {
  sourceChain: Chain
  destinationChain: Chain
  onSubmit?: () => void
}
export const NetworkSwitch = ({
  destinationChain,
  sourceChain,
  disabled,
  ...props
}: NetworkSwitchProps) => {
  const t = useI18n()

  const { switchNetwork, isLoading, chain } = useNetwork()
  const wrongSourceChain = chain?.id !== sourceChain.id

  return (
    <Button
      className='w-full'
      size='lg'
      disabled={disabled || isLoading}
      onClick={() => (wrongSourceChain ? switchNetwork?.(sourceChain.id) : {})}
      {...props}
    >
      {wrongSourceChain ? 'Switch Network' : 'Bridge'}
    </Button>
  )
}

export default NetworkSwitch
