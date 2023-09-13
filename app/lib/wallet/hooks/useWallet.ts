import { useAccount, useConnect, useDisconnect, useNetwork } from 'wagmi'

function useWallet() {
  const { isConnected, address } = useAccount()
  const { connect, connectors, error } = useConnect()
  const { disconnect } = useDisconnect()
  const { chain } = useNetwork()

  return {
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
