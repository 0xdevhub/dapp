'use client'
import { type HTMLProps } from 'react'
import { useWallet } from '@/app/lib/wallet/hooks'
import { Avatar, AvatarProps } from '../avatar/Avatar'
import { ToggleContent } from '@/app/components/ToggleContent'
import { DisconnectButton } from '../button/Disconnect'
import { PanelDetails } from './Details'
import classNames from 'classnames'

type PanelProps = HTMLProps<HTMLDivElement> & {
  avatarProps?: AvatarProps
}

export const Panel = ({ avatarProps, ...props }: PanelProps) => {
  const { address } = useWallet()

  return (
    <ToggleContent
      key='panel-toggle'
      className='lg:relative'
      squareRootClassName={classNames(
        'backdrop-blur-sm lg:rounded-2xl absolute z-[19] bg-black/70',
        'bottom-0 right-0 top-0 lg:-right-2 lg:-top-2 lg:bottom-auto lg:left-auto'
      )}
      squareRootOpenClassName='lg:w-60 w-full'
      squareRootCloseClassName='w-0'
      squareClassName={classNames(
        'px-12 py-12 lg:px-6 lg:py-4 h-full',
        'gradient-border-bg before:from-lime-400 before:to-sky-400',
        'before:bg-gradient-to-b lg:before:rounded-2xl lg:before:p-0.5'
      )}
      element={({ onClick }) => (
        <div className='relative z-20'>
          <Avatar
            title={address}
            address={address}
            onClick={onClick}
            {...avatarProps}
          />
        </div>
      )}
    >
      <PanelDetails {...props}>
        <DisconnectButton />
      </PanelDetails>
    </ToggleContent>
  )
}
export default Panel
