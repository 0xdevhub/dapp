import { Chain, useNetwork as useNetworkHook, useSwitchNetwork } from 'wagmi'

export type ChainConfig = Chain & {
  unsupported?: boolean
}

export type UseNetwork = {
  chain?: ChainConfig
  chains: ChainConfig[]
  switchNetwork?: (chainId: number) => void
  error: Error | null
  isLoading: boolean
  pendingChainId?: number
}

export function useNetwork(): UseNetwork {
  const { chain } = useNetworkHook()
  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  return {
    error,
    isLoading,
    pendingChainId,
    chains,
    chain,
    switchNetwork
  }
}

export default useNetwork
