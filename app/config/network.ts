import { Chain, avalancheFuji } from 'wagmi/chains'
import { merge, reduce } from 'lodash'
import { getChainRPCById } from '../lib/utils/network'

export const AVALANCHE = merge(avalancheFuji, {
  rpcUrls: {
    protocol: getChainRPCById(avalancheFuji.id)
  }
})

export const allowedChains = [AVALANCHE]

export const allowedChainsConfig = reduce(
  allowedChains,
  (acc, chain: Chain) => {
    acc[chain.id] = chain

    return acc
  },
  {} as { [key: number]: Chain }
)
