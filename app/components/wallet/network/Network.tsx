import { Children, type HTMLProps } from 'react'

import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { NetworkThumbnail } from './Thumbnail'
import classNames from 'classnames'
import { Chain } from 'wagmi'

type NetworkProps = HTMLProps<HTMLDivElement> & {
  chain: Chain
  chains: Chain[]
}

export const Network = ({ chain, chains, ...props }: NetworkProps) => {
  return (
    <div {...props} className={classNames(props.className)}>
      <div className='flex cursor-pointer justify-between space-x-2'>
        <div className='flex items-center space-x-2'>
          <NetworkThumbnail />
          <span>{chain.name}</span>
        </div>
        <ChevronDownIcon width={18} />
      </div>
      {/* <ul>
        {Children.toArray(chains.map((chainItem) => <li>{chainItem.name}</li>))}
      </ul> */}
    </div>
  )
}

export default Network
