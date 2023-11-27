import { allowedChainsConfig, allowedChains } from '@/app/config/config'
import { find } from 'lodash'
import { Chain, useNetwork as useNetworkHook, useSwitchNetwork } from 'wagmi'

export type ChainConfig = Chain & {
  unsupported?: boolean
}

export function useNetwork() {
  const { chain } = useNetworkHook()

  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  // returns default when not defined yet
  const chainIdRefined = find(allowedChains, { id: chain?.id })

  const configByCurrentChainOrDefaultId =
    allowedChainsConfig[
      chainIdRefined?.id || +process.env.NEXT_PUBLIC_NETWORK_DEFAULT_ID!
    ]

  return {
    error,
    isLoading,
    pendingChainId,
    chains,
    chain,
    switchNetwork,
    config: configByCurrentChainOrDefaultId
  }
}

export default useNetwork
