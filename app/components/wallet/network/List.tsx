'use client'

import { Children, type HTMLProps } from 'react'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import useNetwork, { ChainConfig } from '@/app/lib/wallet/hooks/useNetwork'
import { Loading } from '@/app/components/Loading'
import { ExclamationCircleIcon } from '@heroicons/react/24/solid'
import { Text } from '@/app/components/typography'
import { useI18n } from '@/locales/client'

type NetworkListProps = HTMLProps<HTMLUListElement> & {
  chain: ChainConfig
  chains: ChainConfig[]
}

export const NetworkList = ({ chain, chains, ...props }: NetworkListProps) => {
  const { switchNetwork, isLoading } = useNetwork()
  const t = useI18n()

  return (
    <ul {...props}>
      {isLoading && (
        <li className='p-2'>
          <Loading className='my-2' />
        </li>
      )}
      {Children.toArray(
        chains.map((chainItem) => (
          <li
            className={classNames(
              'dark:bg-black/75 hover:dark:bg-white/5 hover:dark:text-cyan-50',
              'bg-white/75 hover:bg-black/10',
              'flex cursor-pointer items-center justify-between space-x-2 p-2'
            )}
            onClick={() => switchNetwork?.(chainItem.id)}
          >
            <Text as='span'>{chainItem.name}</Text>
            <span className='flex items-center space-x-px'>
              {chain.id === chainItem.id && (
                <CheckBadgeIcon width={18} className='text-green-400' />
              )}
              {chainItem.testnet === true && (
                <ExclamationCircleIcon
                  width={18}
                  className='text-yellow-400'
                  title={t('NETWORK.TESTNET')}
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
