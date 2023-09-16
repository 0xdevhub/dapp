'use client'

import { Children, type HTMLProps } from 'react'
import { CheckBadgeIcon, PuzzlePieceIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import useNetwork, { ChainConfig } from '@/app/lib/wallet/hooks/useNetwork'
import Loading from '@/app/components/Loading'

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
              'cursor-pointer bg-black/70 p-2 hover:bg-black/40 hover:text-white',
              'flex items-center justify-between space-x-2'
            )}
            onClick={() => switchNetwork && switchNetwork(chainItem.id)}
          >
            <span>{chainItem.name}</span>
            <span className='flex items-center space-x-px'>
              <span>
                {chain.id === chainItem.id && (
                  <CheckBadgeIcon
                    width={18}
                    className='text-green-400'
                    title='conectado'
                  />
                )}
              </span>
              {chainItem.testnet === true && (
                <PuzzlePieceIcon
                  width={18}
                  className='text-dark-green'
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
