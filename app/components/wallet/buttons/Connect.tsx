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
import classNames from 'classnames'

export const WalletConnectButton = () => {
  const { connectors, connect, error } = useWallet()

  return connectors.map((connector) => (
    <button
      className={classNames([
        'text-sm text-dark-blue',
        'w-full rounded-md px-2 py-1',
        'bg-lime-400'
        // 'rotate-bg bg-gradient-radial from-yellow-400 via-sky-400 to-green-400'
      ])}
      type='button'
      key={connector.id}
      onClick={() => connect({ connector })}
    >
      Acessar
    </button>
  ))
}

export default WalletConnectButton
