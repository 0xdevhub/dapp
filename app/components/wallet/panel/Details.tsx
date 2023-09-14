'use client'

import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { useWallet, useBalance } from '@/app/lib/wallet/hooks'
import addressUtils from '@/app/lib/utils/address'

import Heading from '@/app/components/Heading'
import balanceUtils from '@/app/lib/utils/balance'
import { Square2StackIcon } from '@heroicons/react/24/outline'

export const PanelDetails = (props: HTMLProps<HTMLDivElement>) => {
  const { balance } = useBalance()
  const { address, chain } = useWallet()

  return (
    <section
      {...props}
      className={classNames(props?.className, 'flex flex-col space-y-6')}
    >
      <Heading variant='h4'>Minha carteira</Heading>
      <div>
        <Heading variant='h5'>ID</Heading>
        <div className='flex justify-between space-x-4'>
          <p>{addressUtils.toEllipsis(address!, 8, 6)}</p>
          <Square2StackIcon
            width={16}
            className='cursor-pointer text-dark-green'
          />
        </div>
      </div>
      <div>
        <Heading variant='h5'>Rede</Heading>
        <div>{chain?.name}</div>
      </div>
      <div>
        <Heading variant='h5'>Saldo</Heading>
        <div className='flex space-x-2'>
          <span>{balanceUtils.cropDecimals(balance?.formatted)}</span>
          <span>{balance?.symbol}</span>
        </div>
      </div>
    </section>
  )
}

export default PanelDetails
