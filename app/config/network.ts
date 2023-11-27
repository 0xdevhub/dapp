import { Chain, avalancheFuji } from 'wagmi/chains'
import { merge, reduce } from 'lodash'
import { getChainRPCById } from '../lib/utils/network'

export const avalancheFujiChain: Chain = merge(avalancheFuji, {
  rpcUrls: {
    protocol: getChainRPCById(avalancheFuji.id)
  },
  contracts: {
    accessManagement: {
      address: '0x1987F5A465c27dD03d25a029d66a3eD800228EC9',
      blockCreated: 0
    },
    hub: {
      address: '0x53E13Dd84Dc418095c31655573504F9A588F9159',
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
