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
      useClickOutside={true}
      squareRootClassName={classNames(
        'backdrop-blur-sm lg:rounded-2xl absolute z-[19] bg-black/70',
        'bottom-0 right-0 top-0 lg:-right-2 lg:-top-2 lg:bottom-auto lg:left-auto'
      )}
      squareRootOpenClassName='lg:w-60 w-full'
      squareRootCloseClassName='w-0'
      element={({ onClick, isOpen }) => (
        <div
          className={classNames('relative', {
            'z-[20]': isOpen
          })}
        >
          <Avatar
            title={address}
            address={address}
            onClick={onClick}
            {...avatarProps}
          />
        </div>
      )}
    >
      <PanelDetails
        {...props}
        className={classNames(
          props.className,
          'h-full p-6',
          'gradient-border-bg before:from-lime-400 before:to-sky-400',
          'before:bg-gradient-to-b lg:before:rounded-2xl lg:before:p-0.5'
        )}
      >
        <DisconnectButton />
      </PanelDetails>
    </ToggleContent>
  )
}
export default Panel
