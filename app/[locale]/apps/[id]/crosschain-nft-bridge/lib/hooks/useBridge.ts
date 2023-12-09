import BRIDGE_ABI from './abi/bridgeABI.json'
import { useNetwork } from '@/app/lib/wallet/hooks'
import { useContractWrite, useWaitForTransaction } from 'wagmi'
import { Chain } from '@/app/config/types'

type UseBridgeProps = {
  destinationChain: Chain
  ERC721Address: string
  ERC721TokenId: bigint
  fee: bigint
}

export const useBridge = ({
  destinationChain,
  ERC721Address,
  ERC721TokenId,
  fee
}: UseBridgeProps) => {
  const { config } = useNetwork()

  const { writeAsync, isLoading, data, status } = useContractWrite({
    address: config.contracts.crosschainNFTBridgeContract
      .address as `0x${string}`,
    abi: BRIDGE_ABI,
    functionName: 'sendERC721UsingERC20',
    args: [destinationChain.id, ERC721Address, ERC721TokenId, fee]
  })

  const { isLoading: isTransactionLoading } = useWaitForTransaction({
    hash: data?.hash,
    enabled: !!data?.hash
  })

  return {
    bridge: writeAsync,
    isLoading: isLoading || isTransactionLoading,
    status
  }
}
