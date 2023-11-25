import { avalancheFuji } from 'wagmi/chains'
import { merge } from 'lodash'
import { getChainRPCById } from '../lib/utils/network'

export const AVALANCHE = merge(avalancheFuji, {
  rpcUrls: {
    protocol: getChainRPCById(avalancheFuji.id)
  }
})

export const allowedChains = [AVALANCHE]

export const allowedChainsConfig = Object.fromEntries(
  Object.entries(allowedChains).map(([network, config]) => [network, config])
)
