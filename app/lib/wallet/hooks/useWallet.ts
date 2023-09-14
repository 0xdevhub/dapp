import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi'

export function useWallet() {
  const { isConnected, address, isConnecting } = useAccount()
  const { connect, connectors, error } = useConnect()
  const { disconnect } = useDisconnect()
  const { chain } = useNetwork()

  return {
    isConnecting,
    chain,
    address,
    isConnected,
    connect,
    connectors,
    error,
    disconnect
  }
}

export default useWallet
