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

type GetPayloadProps = {
  config?: Chain
  targetEvmChainIdSettings?: EvmChainSettings
  receiver?: string
  originEvmChainId?: bigint
  ERC721Address?: string
  ERC721TokenId?: bigint
  name?: string
  symbol?: string
  tokenURI?: string
}

const getPayload = ({
  config,
  targetEvmChainIdSettings,
  receiver,
  originEvmChainId,
  ERC721Address,
  ERC721TokenId,
  name,
  symbol,
  tokenURI
}: GetPayloadProps) => {
  const receiverFallback = ethers.isAddress(receiver)
    ? receiver
    : ethers.ZeroAddress

  const evmChainId = originEvmChainId || config?.id || 0n
  const ERC721AddressFallback = ethers.isAddress(ERC721Address)
    ? ERC721Address
    : ethers.ZeroAddress
  const ERC721TokenIdFallback = ERC721TokenId || 0n

  return {
    toChain: targetEvmChainIdSettings?.nonEvmChainId,
    receiver: targetEvmChainIdSettings?.adapter,
    gasLimit: targetEvmChainIdSettings?.gasLimit,
    data: coderUtils.abiCoder.encode(
      ['address', 'bytes', 'bytes'],
      [
        receiverFallback,
        coderUtils.abiCoder.encode(
          ['uint256', 'address', 'uint256'],
          [evmChainId, ERC721AddressFallback, ERC721TokenIdFallback]
        ),
        coderUtils.abiCoder.encode(
          ['string', 'string', 'string'],
          [name, symbol, tokenURI]
        )
      ]
    )
  }
}

export const useBridgeFees = ({
  destinationChain,
  ERC721Address,
  ERC721TokenId
}: UseBridgeFeesProps) => {
  const { isConnected, address: walletAddress } = useWallet()
  const { config } = useNetwork()

  const getEvmChainIdSettingsResult = useContractRead({
    address: config.contracts.crosschainNFTBridgeContract
      .address as `0x${string}`,
    abi: BRIDGE_ABI,
    enabled:
      !!walletAddress &&
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
      !!walletAddress &&
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

  const getFeeResult = useContractRead({
    address: targetEvmChainIdSettings?.adapter as `0x${string}`,
    abi: BASE_ADAPTER_ABI,
    enabled:
      !!walletAddress &&
      isConnected &&
      destinationChain.id !== config.id &&
      ethers.isAddress(ERC721Address) &&
      ethers.isAddress(targetEvmChainIdSettings?.adapter) &&
      targetEvmChainIdSettings?.isEnabled,
    functionName: 'getFee',
    args: [
      getPayload({
        config,
        targetEvmChainIdSettings,
        receiver: walletAddress as string,
        originEvmChainId: wrappedToken?.evmChainId,
        ERC721Address,
        ERC721TokenId,
        name,
        symbol,
        tokenURI
      })
    ]
  })

  return {
    fee: BigInt((getFeeResult?.data as bigint) || 0n)
  }
}
