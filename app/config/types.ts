import { Chain as IChain } from 'wagmi/chains'

export type Chain = IChain & {
  blockExplorers: Partial<Pick<IChain, 'blockExplorers'>> & {
    thegraph: {
      name: string
      url?: string
    }
  }
  rpcUrls: Partial<Pick<IChain, 'rpcUrls'>> & {
    protocol: {
      http: readonly string[]
      webSocket?: readonly string[]
    }
  }
  contracts: {
    accessManagement: {
      address: string
      blockCreated?: number
    }
    hub: {
      address: string
      blockCreated?: number
    }
    crosschainNFTBridgeContract: {
      address: string
      blockCreated?: number
    }
    LINK: {
      address: string
      blockCreated?: number
    }
  }
}
