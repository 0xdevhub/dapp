'use client'

import { type HTMLProps, type ReactNode, useState } from 'react'
import classNames from 'classnames'
import { useWallet, useBalance } from '@/app/lib/wallet/hooks'
import addressUtils from '@/app/lib/utils/address'

import Heading from '@/app/components/Heading'
import { DisconnectButton } from '../button/Disconnect'
import { ethers } from 'ethers'
import balanceUtils from '@/app/lib/utils/balance'
import PanelDetails from './Details'

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
      <div
        tabIndex={-1}
        className={classNames(
          'gradient-border-bg before:rotate-bg before:bg-gradient-radial lg:before:rounded-2xl lg:before:p-0.5',
          'before:from-yellow-400 before:via-sky-400 before:to-lime-400',
          'absolute z-[19] bg-black/70 backdrop-blur-sm',
          'duration-400 transition-all',
          'lg:-right-2 lg:-top-2 lg:bottom-auto lg:left-auto lg:rounded-2xl lg:px-6 lg:py-4',
          'bottom-0 right-0 top-0 px-12 py-8',
          isOpen
            ? 'visible h-full w-full blur-0 lg:h-auto lg:w-60'
            : 'invisible h-0 w-0 overflow-hidden blur'
        )}
      >
        <div className='flex h-full flex-col justify-between space-y-6'>
          <PanelDetails />
          <DisconnectButton />
        </div>
      </div>
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
