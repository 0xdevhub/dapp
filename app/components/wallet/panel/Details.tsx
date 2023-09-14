'use client'

import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { useWallet, useBalance } from '@/app/lib/wallet/hooks'
import addressUtils from '@/app/lib/utils/address'

import Heading from '@/app/components/Heading'
import balanceUtils from '@/app/lib/utils/balance'
import { Square2StackIcon } from '@heroicons/react/24/outline'
import { useCopyToClipboard } from 'usehooks-ts'
import { Network } from '../network'

export const PanelDetails = (props: HTMLProps<HTMLDivElement>) => {
  const { balance } = useBalance()
  const { address, chain } = useWallet()
  const [, copy] = useCopyToClipboard()

  return (
    <section
      {...props}
      className={classNames(props?.className, 'flex flex-col space-y-6')}
    >
      <Heading variant='h4'>Minha carteira</Heading>
      <div className='flex flex-col space-y-2'>
        <Heading variant='h5'>ID</Heading>
        <div className='flex justify-between space-x-4'>
          <p>{addressUtils.toEllipsis(address!, 8, 6)}</p>
          <Square2StackIcon
            onClick={() => copy(address!)}
            width={18}
            className='cursor-pointer text-dark-green active:text-lime-400'
          />
        </div>
      </div>
      <div className='flex flex-col space-y-2'>
        <Heading variant='h5'>Rede</Heading>
        <Network chain={chain!} />
      </div>
      <div className='flex flex-col space-y-2'>
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
