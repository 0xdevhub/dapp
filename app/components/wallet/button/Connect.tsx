// 'use client'

// import classNames from 'classnames'

// export const WalletConnectButton = () => {
//   return (
//     <button
//       type='button'
//       className={classNames([
//         'text-sm text-dark-blue',
//         'rounded-md px-2 py-1',
//         'bg-lime-400'
//         // 'rotate-bg bg-gradient-radial from-yellow-400 via-sky-400 to-green-400'
//       ])}
//     >
//       Acessar
//     </button>
//   )
// }

// export default WalletConnectButton

'use client'

import useWallet from '@/app/lib/wallet/hooks/useWallet'
import { Button } from '@/app/components/Button'

/// bkp:  'rotate-bg bg-gradient-radial from-yellow-400 via-sky-400 to-green-400'

export const WalletConnectButton = () => {
  const {
    connectors: [connector],
    connect,
    isConnecting
  } = useWallet()

  return (
    <Button
      loadingProps={{
        variant: 'dark'
      }}
      loading={isConnecting}
      className='w-full justify-center rounded-md'
      type='button'
      key={connector.id}
      disabled={isConnecting}
      onClick={() => connect({ connector })}
    >
      Acessar
    </Button>
  )
}

export default WalletConnectButton
