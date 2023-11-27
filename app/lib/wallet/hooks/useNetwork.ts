import { allowedChainsConfig } from '@/app/config/config'
import { Chain, useNetwork as useNetworkHook, useSwitchNetwork } from 'wagmi'

export type ChainConfig = Chain & {
  unsupported?: boolean
}

export function useNetwork() {
  const { chain } = useNetworkHook()

  const { chains, error, isLoading, pendingChainId, switchNetwork } =
    useSwitchNetwork()

  //returns default when not defined yet
  const config =
    allowedChainsConfig[
      chain?.id || +process.env.NEXT_PUBLIC_NETWORK_DEFAULT_ID!
    ]

  return {
    error,
    isLoading,
    pendingChainId,
    chains,
    chain,
    switchNetwork,
    config
  }
}

export default useNetwork
