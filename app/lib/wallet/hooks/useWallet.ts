import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi'

function useWallet() {
  const useAccountOptions = useAccount()
  const useConnectOptions = useConnect()
  const useDisconnectOptions = useDisconnect()
  const useNetworkOptions = useNetwork()

  return {
    ...useNetworkOptions,
    ...useAccountOptions,
    ...useDisconnectOptions,
    ...useConnectOptions
  }
}

export default useWallet
