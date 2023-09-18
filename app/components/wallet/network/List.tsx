'use client'

import { Children, type HTMLProps } from 'react'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import useNetwork, { ChainConfig } from '@/app/lib/wallet/hooks/useNetwork'
import Loading from '@/app/components/Loading'
import { ExclamationCircleIcon } from '@heroicons/react/24/outline'

type NetworkListProps = HTMLProps<HTMLUListElement> & {
  chain: ChainConfig
  chains: ChainConfig[]
}

export const NetworkList = ({ chain, chains, ...props }: NetworkListProps) => {
  const { switchNetwork, isLoading } = useNetwork()

  return (
    <ul {...props}>
      <li>{isLoading && <Loading className='my-2' />}</li>
      {Children.toArray(
        chains.map((chainItem) => (
          <li
            className={classNames(
              'dark:bg-black/75 hover:dark:bg-black/40 hover:dark:text-white',
              'bg-white/75 hover:bg-white/40 ',
              'flex cursor-pointer items-center justify-between space-x-2 p-2'
            )}
            onClick={() => switchNetwork && switchNetwork(chainItem.id)}
          >
            <span>{chainItem.name}</span>
            <span className='flex items-center space-x-px'>
              {chain.id === chainItem.id && (
                <CheckBadgeIcon width={18} className='text-green-400' />
              )}
              {chainItem.testnet === true && (
                <ExclamationCircleIcon
                  width={18}
                  className='text-yellow-400'
                  title='testnet'
                />
              )}
            </span>
          </li>
        ))
      )}
    </ul>
  )
}

export default NetworkList
