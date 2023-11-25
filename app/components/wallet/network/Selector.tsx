'use client'

import { type HTMLProps } from 'react'

import {
  ChevronDownIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/solid'

import { NetworkThumbnail } from './Thumbnail'
import classNames from 'classnames'
import { ChainConfig } from '@/app/lib/wallet/hooks/useNetwork'
import { useI18n } from '@/locales/client'
import { Text } from '@/app/components/typography'

type NetworkSelectorProps = HTMLProps<HTMLDivElement> & {
  chain: ChainConfig
  isOpen?: boolean
}

export const NetworkSelector = ({
  chain,
  isOpen,
  ...props
}: NetworkSelectorProps) => {
  const t = useI18n()

  return (
    <div
      {...props}
      className={classNames(
        props.className,
        'flex cursor-pointer justify-between'
      )}
    >
      <div className='flex items-center space-x-2'>
        {chain.unsupported ? (
          <div>
            <ExclamationTriangleIcon width={18} className='text-red-400' />
          </div>
        ) : (
          <NetworkThumbnail src={`/assets/images/chains/${chain.id}.svg`} />
        )}
        <Text as='span'>
          {chain.unsupported ? t('FEEDBACK.NOT_ALLOWED') : chain.name}
        </Text>
      </div>
      <ChevronDownIcon
        width={18}
        className={classNames('transform', {
          'rotate-180': isOpen,
          'rotate-0': !isOpen
        })}
      />
    </div>
  )
}

export default NetworkSelector
