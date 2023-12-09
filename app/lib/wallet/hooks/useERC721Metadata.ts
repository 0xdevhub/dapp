import { useWallet } from '@/app/lib/wallet/hooks'
import { erc721ABI, useContractReads } from 'wagmi'
import { ethers } from 'ethers'

export type UseERC721MetadataProps = {
  ERC721Address: string
  ERC721TokenId: bigint
}

export const useERC721Metadata = ({
  ERC721Address,
  ERC721TokenId
}: UseERC721MetadataProps) => {
  const { isConnected, address: walletAddress } = useWallet()

  const ERC721Token = useContractReads({
    enabled:
      !!walletAddress &&
      isConnected &&
      ethers.isAddress(ERC721Address) &&
      !(ERC721Address?.length === 0) &&
      !(ERC721TokenId === 0n),
    contracts: [
      {
        abi: erc721ABI,
        address: ERC721Address as `0x${string}`,
        functionName: 'name'
      },
      {
        abi: erc721ABI,
        address: ERC721Address as `0x${string}`,
        functionName: 'symbol'
      },
      {
        abi: erc721ABI,
        address: ERC721Address as `0x${string}`,
        functionName: 'tokenURI',
        args: [BigInt(ERC721TokenId)]
      }
    ]
  })

  const name = ERC721Token.data?.[0].result || ''
  const symbol = ERC721Token.data?.[1].result || ''
  const tokenURI = ERC721Token.data?.[2].result || ''

  return {
    name,
    symbol,
    tokenURI
  }
}
