import { getChainRPCById } from './../lib/utils/network'
import { Chain, avalancheFuji } from 'wagmi/chains'
import merge from 'lodash/merge'

export const AVALANCHE: Chain = merge(avalancheFuji, {
  contracts: {
    // TODO: Add contracts here
    // ACCESS_MANAGEMENT: {
    //   address: '0x',
    //   blockCreated: 0
    // }
  }
})

export const allowedChains: Chain[] = [AVALANCHE]

export const allowedChainsConfig = Object.fromEntries(
  [AVALANCHE].map((network) => [network.id, getChainRPCById(network.id)])
)
