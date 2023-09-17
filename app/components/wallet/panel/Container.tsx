'use client'

import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { useWallet, useBalance } from '@/app/lib/wallet/hooks'
import addressUtils from '@/app/lib/utils/address'
import { Heading } from '@/app/components/Heading'
import balanceUtils from '@/app/lib/utils/balance'
import { Square2StackIcon } from '@heroicons/react/24/outline'
import { useCopyToClipboard } from 'usehooks-ts'
import { Network } from '../network'
import useNetwork from '@/app/lib/wallet/hooks/useNetwork'
import { DisconnectButton } from '../button/Disconnect'

export const PanelContainer = (props: HTMLProps<HTMLDivElement>) => {
  const { balance } = useBalance()
  const { chain, chains } = useNetwork()
  const { address } = useWallet()
  const [, copy] = useCopyToClipboard()

  return (
    <section
      {...props}
      className={classNames(
        props?.className,
        'flex h-full flex-col justify-between space-y-4 p-6 lg:p-4',
        'before:from-lime-400 before:to-sky-400 before:gradient-mask',
        'before:bg-gradient-to-b lg:before:rounded-2xl lg:before:p-0.5'
      )}
    >
      <div className='flex flex-col space-y-4'>
        <Heading variant='h4'>Minha carteira</Heading>
        <div className='flex flex-col space-y-1'>
          <Heading variant='h5'>ID</Heading>
          <div className='flex justify-between space-x-4'>
            <p>{addressUtils.toEllipsis(address!, 8, 6)}</p>
            <Square2StackIcon
              onClick={() => copy(address!)}
              width={18}
              className='cursor-pointer  active:text-lime-400'
            />
          </div>
        </div>
        <div className='flex flex-col space-y-1'>
          <Heading variant='h5'>Rede</Heading>
          <Network chain={chain!} chains={chains} />
        </div>
        <div className='flex flex-col space-y-1'>
          <Heading variant='h5'>Saldo</Heading>
          <div className='flex space-x-2'>
            <span>{balanceUtils.cropDecimals(balance?.formatted)}</span>
            <span>{balance?.symbol}</span>
          </div>
        </div>
      </div>
      <div>
        <DisconnectButton />
      </div>
    </section>
  )
}

export default PanelContainer
