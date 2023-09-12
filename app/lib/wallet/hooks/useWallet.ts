import { useAccount, useConnect, useDisconnect } from 'wagmi'

function useWallet() {
  const { isConnected, address } = useAccount()
  const { connect, connectors, error } = useConnect()
  const { disconnect } = useDisconnect()

  return {
    address,
    isConnected,
    connect,
    connectors,
    error,
    disconnect
  }
}

export default useWallet
