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
  const { isConnected, disconnect, address, connectors, connect, error } =
    useWallet()

  return (
    <>
      {isConnected ? (
        <button type='button' onClick={() => disconnect()}>
          Ola, ({address?.slice(0, 6)})
        </button>
      ) : (
        connectors.map((connector) => {
          return (
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
          )
        })
      )}
      {error && <div>{error.message}</div>}
    </>
  )
}

export default WalletConnectButton
