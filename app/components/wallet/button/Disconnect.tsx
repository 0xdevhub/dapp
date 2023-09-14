'use client'

import useWallet from '@/app/lib/wallet/hooks/useWallet'
import Button, { ButtonProps } from '@/app/components/Button'

export type DisconnectButtonProps = ButtonProps

export const DisconnectButton = (props: DisconnectButtonProps) => {
  const { disconnect } = useWallet()

  return (
    <Button
      className='w-full justify-center space-x-2 rounded-md'
      type='button'
      onClick={() => disconnect()}
      {...props}
    >
      Desconectar
    </Button>
  )
}

export default DisconnectButton
