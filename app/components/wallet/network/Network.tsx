import { Children, type HTMLProps } from 'react'

import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { NetworkThumbnail } from './Thumbnail'
import classNames from 'classnames'
import ToggleContent from '@/app/components/ToggleContent'
import useNetwork, { ChainConfig } from '@/app/lib/wallet/hooks/useNetwork'
import {
  CheckBadgeIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline'
import Loading from '../../Loading'

type NetworkProps = HTMLProps<HTMLUListElement> & {
  chain: ChainConfig
  chains: ChainConfig[]
}

export const Network = ({ chain, chains, ...props }: NetworkProps) => {
  const { switchNetwork, isLoading } = useNetwork()

  return (
    <ToggleContent
      key='network-toggle'
      className='flex flex-col space-y-2'
      element={({ onClick }) => (
        <div
          onClick={onClick}
          className='flex cursor-pointer justify-between space-x-2'
        >
          <div className='flex items-center space-x-2'>
            {chain.unsupported ? (
              <div>
                <ExclamationTriangleIcon width={18} className='text-red-400' />
              </div>
            ) : (
              <NetworkThumbnail src={`/assets/images/chains/${chain.id}.svg`} />
            )}
            <span>{chain.unsupported ? 'Não suportada' : chain.name}</span>
          </div>
          <ChevronDownIcon width={18} />
        </div>
      )}
    >
      <ul {...props}>
        <li>{isLoading && <Loading className='my-2' />}</li>
        {Children.toArray(
          chains.map((chainItem) => (
            <li
              className={classNames(
                'cursor-pointer bg-black/70 p-2 hover:bg-black/40 hover:text-white',
                'flex space-x-2'
              )}
              onClick={() => switchNetwork && switchNetwork(chainItem.id)}
            >
              <span>{chainItem.name}</span>
              <span>
                {chain.id === chainItem.id && (
                  <CheckBadgeIcon width={18} className='text-green-400' />
                )}
              </span>
            </li>
          ))
        )}
      </ul>
    </ToggleContent>
  )
}

export default Network
