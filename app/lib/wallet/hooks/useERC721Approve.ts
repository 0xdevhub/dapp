'use client'

import { useNetwork, useWallet } from '@/app/lib/wallet/hooks'
import { ethers } from 'ethers'
import { eq, isEmpty, gte } from 'lodash'
import { useMemo } from 'react'

import {
  erc721ABI,
  useContractRead,
  useContractWrite,
  useWaitForTransaction
} from 'wagmi'

export type UseERC721ApproveProps = {
  address: string
  tokenId: number
  spender: string
}

export const useERC721Approve = ({
  tokenId,
  address,
  spender
}: UseERC721ApproveProps) => {
  const { isConnected, address: walletAddress } = useWallet()

  const { data: ERC721Approved, isLoading: ERC721IsApprovedLoading } =
    useContractRead({
      abi: erc721ABI,
      address: address as `0x${string}`,
      enabled:
        !!walletAddress &&
        ethers.isAddress(address) &&
        !isEmpty(address) &&
        !isEmpty(tokenId) &&
        !eq(tokenId, '') &&
        gte(Number(tokenId), 0) &&
        isConnected,
      functionName: 'getApproved',
      args: [BigInt(tokenId)],
      watch: true
    })

  const {
    data: ERC721Approve,
    writeAsync,
    isLoading: ERC721IsLoading
  } = useContractWrite({
    abi: erc721ABI,
    address: address as `0x${string}`,
    functionName: 'approve',
    args: [spender as `0x${string}`, BigInt(tokenId)]
  })

  const { isLoading: isLoadingApprovingTransaction } = useWaitForTransaction({
    hash: ERC721Approve?.hash,
    enabled: ERC721Approve?.hash !== undefined
  })

  const isApproved = useMemo(() => {
    return ERC721Approved?.toLowerCase() === spender.toLowerCase()
  }, [ERC721Approved])

  return {
    approve: writeAsync,
    isApproved,
    isLoading:
      ERC721IsLoading ||
      isLoadingApprovingTransaction ||
      ERC721IsApprovedLoading
  }
}

export default useERC721Approve
