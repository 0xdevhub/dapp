import { reduce } from 'lodash'
import { avalancheFujiChain } from './chains'
import { Chain } from './types'

export const allowedChains = [avalancheFujiChain]

export const allowedChainsConfig = reduce(
  allowedChains,
  (acc, chain: Chain) => {
    acc[chain.id] = chain

    return acc
  },
  {} as { [key: number]: Chain }
)
