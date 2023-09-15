import { useNetwork as useNetworkHook } from 'wagmi'

export function useNetwork() {
  const { chain, chains } = useNetworkHook()

  return {
    chains,
    chain
  }
}

export default useNetwork
