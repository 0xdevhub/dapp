'use client'

import useWallet from '@/app/lib/wallet/hooks/useWallet'
import Button, { ButtonProps } from '@/app/components/Button'
import { ArrowSmallLeftIcon } from '@heroicons/react/24/solid'

export type DisconnectButtonProps = ButtonProps

export const DisconnectButton = ({
  children,
  ...props
}: DisconnectButtonProps) => {
  const { disconnect } = useWallet()

  return (
    <Button
      className='w-full justify-center space-x-2 rounded-md'
      type='button'
      onClick={() => disconnect()}
      iconBefore={<ArrowSmallLeftIcon width={16} />}
      {...props}
    >
      Desconectar
    </Button>
  )
}

export default DisconnectButton
