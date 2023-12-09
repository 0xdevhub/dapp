'use client'

import { Button } from '@/app/components'
import { ButtonProps } from '@/app/components/Button'
import { AccountConnect } from '@/app/components/wallet/account/Connect'
import { NetworkSwitch } from '@/app/components/wallet/network/Switch'
import { Chain } from '@/app/config/types'
import { useNetwork, useWallet } from '@/app/lib/wallet/hooks'
import useERC20Approve from '@/app/lib/wallet/hooks/useERC20Approve'
import { useERC721Approve } from '@/app/lib/wallet/hooks/useERC721Approve'
import { ethers } from 'ethers'
import { useEffect, useMemo } from 'react'
import { useFormContext } from 'react-hook-form'
import { useDarkMode, useEffectOnce } from 'usehooks-ts'
import { useBridgeFees } from '../lib/hooks/useBridgeFees'
import { useERC721Metadata } from '@/app/lib/wallet/hooks/useERC721Metadata'
import Image from 'next/image'
import { Text } from '@/app/components/typography'

export type BridgeButtonProps = ButtonProps & {
  sourceChain: Chain
  destinationChain: Chain
  onSubmit?: () => void
}

export const BridgeButton = ({
  destinationChain,
  sourceChain,
  disabled,
  loading,
  ...props
}: BridgeButtonProps) => {
  const { watch, register, setValue } = useFormContext()
  const { isConnected } = useWallet()
  const { isLoading, chain, config } = useNetwork()
  const { isDarkMode } = useDarkMode()

  const wrongSourceChain = useMemo(
    () => chain?.id !== sourceChain.id,
    [chain?.id, sourceChain.id]
  )

  const erc721AddressField = watch('erc721Address', '')
  const erc721TokenIdField = watch('erc721TokenId', '')
  const bridgeFeesField = watch('bridgeFees', '')

  const { fee } = useBridgeFees({
    destinationChain,
    ERC721Address: erc721AddressField,
    ERC721TokenId: erc721TokenIdField
  })

  const {
    approve: approveERC721,
    isApproved: isERC721Approved,
    isLoading: isERC721Loading
  } = useERC721Approve({
    spender: config.contracts.crosschainNFTBridgeContract.address,
    address: erc721AddressField,
    tokenId: erc721TokenIdField
  })

  const {
    approve: approveERC20,
    isApproved: isERC20Approved,
    isLoading: isERC20Loading
  } = useERC20Approve({
    spender: config.contracts.crosschainNFTBridgeContract.address,
    address: config.contracts.LINK.address,
    amount: fee
  })

  const { symbol } = useERC721Metadata({
    ERC721Address: erc721AddressField,
    ERC721TokenId: erc721TokenIdField
  })

  const handleApproval = async () => {
    if (!isERC721Approved) {
      await approveERC721()
    }
    if (!isERC20Approved) {
      await approveERC20()
    }
  }

  useEffect(() => {
    setValue('bridgeFees', fee)
  }, [fee])

  useEffectOnce(() => {
    register('bridgeFees')
  })

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
            <div className='flex flex-col space-y-4'>
              <div>
                <ul>
                  <li>
                    Fees (Link):{' '}
                    {ethers.formatEther(bridgeFeesField || 0n).toString()}
                  </li>
                  <li>
                    <Text>NFT to bridge: {symbol}</Text>
                  </li>
                </ul>
              </div>
              <Button
                type={isERC721Approved ? 'submit' : 'button'}
                className='w-full'
                size='lg'
                onClick={
                  !isERC721Approved || !isERC20Approved
                    ? (e) => {
                        e.preventDefault()
                        handleApproval()
                      }
                    : undefined
                }
                disabled={
                  disabled ||
                  loading ||
                  isLoading ||
                  isERC721Loading ||
                  isERC20Loading
                }
                loading={
                  loading || isLoading || isERC721Loading || isERC20Loading
                }
                loadingProps={{
                  variant: isDarkMode ? 'dark' : 'primary',
                  className: 'w-6'
                }}
                {...props}
              >
                {isERC721Approved ? (
                  <>{isERC20Approved ? 'Bridge' : 'Approve Link'}</>
                ) : (
                  'Approve NFT'
                )}
              </Button>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default BridgeButton
