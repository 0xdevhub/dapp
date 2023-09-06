'use client'

import classNames from 'classnames'

export const WalletConnectButton = () => {
  return (
    <button
      type='button'
      className={classNames([
        'text-sm text-dark-blue',
        'rounded-md px-2 py-1',
        'bg-lime-400'
        // 'rotate-bg bg-gradient-radial from-yellow-400 via-sky-400 to-green-400'
      ])}
    >
      Connect
    </button>
  )
}

export default WalletConnectButton
