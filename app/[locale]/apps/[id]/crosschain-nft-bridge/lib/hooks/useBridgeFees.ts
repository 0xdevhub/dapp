import BRIDGE_ABI from './abi/bridgeABI.json'
import BASE_ADAPTER_ABI from './abi/baseAdapterABI.json'
import { useNetwork, useWallet } from '@/app/lib/wallet/hooks'
import { useContractRead } from 'wagmi'
import { Chain } from '@/app/config/types'
import { ethers } from 'ethers'
import coderUtils from '@/app/lib/utils/coder'
import { useERC721Metadata } from '@/app/lib/wallet/hooks/useERC721Metadata'

type EvmChainSettings = {
  evmChainId?: bigint
  nonEvmChainId?: bigint
  adapter?: string
  isEnabled?: boolean
  gasLimit?: bigint
}

type ERC721Wrapped = {
  originAddress?: string
  evmChainId?: bigint
  wrappedAddress?: string
}

enum RampType {
  OnRamp,
  OffRamp
}

export type UseBridgeFeesProps = {
  destinationChain: Chain
  ERC721Address: string
  ERC721TokenId: bigint
}

export const useBridgeFees = ({
  destinationChain,
  ERC721Address,
  ERC721TokenId
}: UseBridgeFeesProps) => {
  const { isConnected, address } = useWallet()
  const { config } = useNetwork()

  const getEvmChainIdSettingsResult = useContractRead({
    address: config.contracts.crosschainNFTBridgeContract
      .address as `0x${string}`,
    abi: BRIDGE_ABI,
    enabled:
      isConnected &&
      destinationChain.id !== config.id &&
      ethers.isAddress(ERC721Address),
    functionName: 'getEvmChainIdSettings',
    args: [destinationChain.id, RampType.OnRamp]
  })

  const targetEvmChainIdSettings =
    getEvmChainIdSettingsResult.data as EvmChainSettings

  const { name, symbol, tokenURI } = useERC721Metadata({
    ERC721Address,
    ERC721TokenId
  })

  const getWERC721ByOriginERC721AddressResult = useContractRead({
    address: config.contracts.crosschainNFTBridgeContract
      .address as `0x${string}`,
    abi: BRIDGE_ABI,
    enabled:
      isConnected &&
      destinationChain.id !== config.id &&
      ethers.isAddress(ERC721Address) &&
      ethers.isAddress(targetEvmChainIdSettings?.adapter) &&
      targetEvmChainIdSettings?.isEnabled,
    functionName: 'getWERC721ByOriginERC721Address',
    args: [ERC721Address]
  })

  const wrappedToken =
    getWERC721ByOriginERC721AddressResult.data as ERC721Wrapped

  const payload = {
    toChain: targetEvmChainIdSettings?.nonEvmChainId,
    receiver: targetEvmChainIdSettings?.adapter,
    gasLimit: targetEvmChainIdSettings?.gasLimit,
    data: coderUtils.abiCoder.encode(
      ['address', 'bytes', 'bytes'],
      [
        address,
        coderUtils.abiCoder.encode(
          ['uint256', 'address', 'uint256'],
          [
            wrappedToken?.evmChainId || config.id || 0n,
            ERC721Address || ethers.ZeroAddress,
            ERC721TokenId || 0n
          ]
        ),
        coderUtils.abiCoder.encode(
          ['string', 'string', 'string'],
          [name, symbol, tokenURI]
        )
      ]
    )
  }

  const getFeeResult = useContractRead({
    address: targetEvmChainIdSettings?.adapter as `0x${string}`,
    abi: BASE_ADAPTER_ABI,
    enabled:
      isConnected &&
      destinationChain.id !== config.id &&
      ethers.isAddress(ERC721Address) &&
      ethers.isAddress(targetEvmChainIdSettings?.adapter) &&
      targetEvmChainIdSettings?.isEnabled,
    functionName: 'getFee',
    args: [payload]
  })

  return {
    fee: BigInt((getFeeResult?.data as bigint) || 0n)
  }
}
