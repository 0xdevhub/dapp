'use client'

import { Button } from '@/app/components'
import { ButtonProps } from '@/app/components/Button'
import { AccountConnect } from '@/app/components/wallet/account/Connect'
import { NetworkSwitch } from '@/app/components/wallet/network/Switch'
import { Chain } from '@/app/config/types'
import { useNetwork, useWallet } from '@/app/lib/wallet/hooks'
import { ethers } from 'ethers'
import { isEmpty } from 'lodash'
import { useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { erc721ABI, useContractRead } from 'wagmi'

export type BridgeButtonProps = ButtonProps & {
  sourceChain: Chain
  destinationChain: Chain
  onSubmit?: () => void
}
export const BridgeButton = ({
  destinationChain,
  sourceChain,
  disabled,
  ...props
}: BridgeButtonProps) => {
  const { watch } = useFormContext()
  const { isConnected } = useWallet()
  const { isLoading, chain, config } = useNetwork()

  const wrongSourceChain = useMemo(
    () => chain?.id !== sourceChain.id,
    [chain?.id, sourceChain.id]
  )

  const erc721AddressField = watch('erc721Address', '')
  const erc721TokenIdField = watch('erc721TokenId', '0')

  const { data } = useContractRead({
    abi: erc721ABI,
    address: erc721AddressField,
    enabled:
      ethers.isAddress(erc721AddressField) &&
      (!isEmpty(erc721AddressField) ||
        !isEmpty(erc721TokenIdField) ||
        !isConnected),
    chainId: sourceChain.id,
    functionName: 'getApproved',
    args: [BigInt(erc721TokenIdField)]
  })

  const isApproved = useMemo(() => {
    return (
      data?.toLowerCase() ===
      config.contracts.crosschainNFTBridgeContract.address.toLowerCase()
    )
  }, [data])

  return (
    <>
      {!isConnected ? (
        <AccountConnect size='lg' />
      ) : (
        <>
          {wrongSourceChain ? (
            <NetworkSwitch
              sourceChain={sourceChain}
              destinationChain={destinationChain}
            />
          ) : (
            <Button
              type={isApproved ? 'submit' : 'button'}
              className='w-full'
              size='lg'
              disabled={disabled || isLoading}
              {...props}
            >
              {isApproved ? 'Bridge' : 'Approve'}
            </Button>
          )}
        </>
      )}
    </>
  )
}

export default BridgeButton
