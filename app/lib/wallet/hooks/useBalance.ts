import { useBalance as useBalanceHook } from 'wagmi'
import { useWallet } from './useWallet'

function useBalance() {
  const { address, chain } = useWallet()
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
