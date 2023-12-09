'use client'

import { Card } from '@/app/components'
import { Heading, Text } from '@/app/components/typography'
import { Chain } from '@/app/config/types'
import { useWallet } from '@/app/lib/wallet/hooks'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import Link from 'next/link'
import { HTMLProps } from 'react'

export type SelectorProps = HTMLProps<HTMLDivElement> & {
  chain: Chain
  label: string
  displayBlockExplorer?: boolean
}

export const Selector = ({
  chain,
  label,
  className,
  displayBlockExplorer,
  ...props
}: SelectorProps) => {
  const { address } = useWallet()

  return (
    <Card className={classNames(className, 'rounded-md p-4')} {...props}>
      <Heading as='h5'>{label}</Heading>
      <div className='flex justify-between'>
        <Text className='text-gray-400'>{chain.name}</Text>
        {address && chain && displayBlockExplorer && (
          <Text>
            <Link
              target='_blank'
              href={`${chain.blockExplorers.default.url}/address/${address}`}
            >
              <ArrowTopRightOnSquareIcon
                width={18}
                height={18}
                title={chain.blockExplorers.default.name}
                className='text-gray-600'
                fill='currentColor'
              />
            </Link>
          </Text>
        )}
      </div>
    </Card>
  )
}

export default Selector
