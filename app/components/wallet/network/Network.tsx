import { type HTMLProps } from 'react'

import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { NetworkThumbnail } from './Thumbnail'
import classNames from 'classnames'
import { Chain } from 'wagmi'

type NetworkProps = HTMLProps<HTMLDivElement> & {
  chain: Chain
}

export const Network = ({ chain, ...props }: NetworkProps) => {
  return (
    <div
      {...props}
      className={classNames(
        props.className,
        'flex cursor-pointer justify-between space-x-2'
      )}
    >
      <div className='flex items-center space-x-2'>
        <NetworkThumbnail />
        <span>{chain.name}</span>
      </div>
      <ChevronDownIcon width={18} />
    </div>
  )
}

export default Network
