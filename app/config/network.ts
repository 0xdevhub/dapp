import { Chain, avalancheFuji } from 'wagmi/chains'
import { merge, reduce } from 'lodash'
import { getChainRPCById } from '../lib/utils/network'

export const avalancheFujiChain: Chain = merge(avalancheFuji, {
  rpcUrls: {
    protocol: getChainRPCById(avalancheFuji.id)
  },
  contracts: {
    accessManagement: {
      address: '0x96445b0c40a03a988C72bBb6537358779F4659bC',
      blockCreated: 0
    },
    hub: {
      address: '0xd3975F5c825DDb608d32DDdF89d072c524470414',
      blockCreated: 0
    }
    // todo: add bridge contracts
    // crosschainCcipBrige: {
    //   address: '0x',
    //   blockCreated: 0
    // }
  }
})

export const allowedChains = [avalancheFujiChain]

export const allowedChainsConfig = reduce(
  allowedChains,
  (acc, chain: Chain) => {
    acc[chain.id] = chain

    return acc
  },
  {} as { [key: number]: Chain }
)
