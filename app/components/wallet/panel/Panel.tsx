'use client'

import { type HTMLProps, type ReactNode, useState } from 'react'
import classNames from 'classnames'
import { useWallet, useBalance } from '@/app/lib/wallet/hooks'
import addressUtils from '@/app/lib/utils/address'

import Heading from '@/app/components/Heading'
import { DisconnectButton } from '../button/Disconnect'
import { ethers } from 'ethers'
import balanceUtils from '@/app/lib/utils/balance'

export type PanelButtonProps = {
  onClick?: () => void
}
export type PanelProps =
  | HTMLProps<HTMLDivElement>
  | ({
      children: (props: PanelButtonProps) => ReactNode
    } & Pick<HTMLProps<HTMLDivElement>, 'className'>)

export const Panel = ({ children, ...props }: PanelProps) => {
  const { balance } = useBalance()
  const [isOpen, setIsOpen] = useState(false)
  const { address, chain } = useWallet()

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div {...props} className={classNames(props?.className, 'lg:relative')}>
      {isOpen && (
        <>
          <div
            className='fixed left-0 top-0 z-0 h-full w-full'
            onClick={onClick}
          />
          <div
            className={classNames(
              'absolute z-[19] bg-black/70 backdrop-blur-sm',
              'lg:-right-2 lg:-top-2 lg:bottom-auto lg:left-auto lg:h-auto lg:w-60 lg:rounded-2xl lg:px-6 lg:py-4',
              'bottom-0 left-0 top-0 h-full w-full p-6'
            )}
          >
            <section className='flex h-full flex-col justify-between space-y-6'>
              <div className='flex flex-col space-y-6'>
                <Heading variant='h4'>Minha carteira</Heading>
                <div>
                  <Heading variant='h5'>ID</Heading>
                  <p>{addressUtils.toEllipsis(address!)}</p>
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
              </div>
              <DisconnectButton size='md' />
            </section>
          </div>
        </>
      )}
      <div className='relative z-20'>
        {typeof children === 'function'
          ? children({
              onClick
            })
          : children}
      </div>
    </div>
  )
}

export default Panel
