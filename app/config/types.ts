import { Chain as IChain } from 'wagmi/chains'

export type Chain = IChain & {
  blockExplorers: Partial<Pick<Chain, 'blockExplorers'>> & {
    thegraph: {
      name: string
      url?: string
    }
  }
}
