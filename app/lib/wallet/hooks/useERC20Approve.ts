'use client'

import { useNetwork, useWallet } from '@/app/lib/wallet/hooks'
import { ethers } from 'ethers'
import { eq, isEmpty, gte } from 'lodash'
import { useMemo } from 'react'
import { MaxUint256 } from '@ethersproject/constants'

import {
  erc20ABI,
  useContractRead,
  useContractWrite,
  useWaitForTransaction
} from 'wagmi'

export type UseERC20ApproveProps = {
  spender: string
  amount: bigint
  address: string
}

export const useERC20Approve = ({
  address,
  spender,
  amount
}: UseERC20ApproveProps) => {
  const { isConnected, address: walletAddress } = useWallet()

  const { data: ERC20Approved, isLoading: ERC20IsApprovedLoading } =
    useContractRead({
      abi: erc20ABI,
      address: address as `0x${string}`,
      enabled:
        !!walletAddress &&
        ethers.isAddress(address) &&
        !isEmpty(address) &&
        !isEmpty(spender) &&
        isConnected,
      functionName: 'allowance',
      args: [walletAddress!, spender as `0x${string}`],
      watch: true
    })

  const {
    data: ERC20Approve,
    writeAsync,
    isLoading: ERC20IsLoading
  } = useContractWrite({
    abi: erc20ABI,
    address: address as `0x${string}`,
    functionName: 'approve',
    args: [spender as `0x${string}`, MaxUint256.toBigInt()]
  })

  const { isLoading: isLoadingApprovingTransaction } = useWaitForTransaction({
    hash: ERC20Approve?.hash,
    enabled: ERC20Approve?.hash !== undefined
  })

  const isApproved = useMemo(() => {
    return (ERC20Approved || 0n) >= amount
  }, [ERC20Approved, amount])

  return {
    approve: writeAsync,
    isApproved,
    isLoading:
      ERC20IsLoading || isLoadingApprovingTransaction || ERC20IsApprovedLoading
  }
}

export default useERC20Approve
