import { useBalance as useBalanceHook } from 'wagmi'
import { useWallet } from './useWallet'
import { useNetwork } from './useNetwork'

function useBalance() {
  const { address } = useWallet()
  const { chain } = useNetwork()
  const { data } = useBalanceHook({
    address,
    chainId: chain?.id,
    formatUnits: 'ether'
  })

  return {
    balance: data
  }
}

export default useBalance
