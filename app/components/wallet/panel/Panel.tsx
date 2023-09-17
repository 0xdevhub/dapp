import { type HTMLProps } from 'react'
import { AvatarProps } from '../avatar/Avatar'
import { ToggleContent } from '@/app/components/ToggleContent'
import { PanelContainer } from './Container'
import classNames from 'classnames'
import { PanelSelector } from './Selector'
import { XMarkIcon } from '@heroicons/react/24/outline'

type PanelProps = HTMLProps<HTMLDivElement> & {
  avatarProps?: AvatarProps
}

export const Panel = ({ avatarProps, ...props }: PanelProps) => {
  return (
    <ToggleContent
      key='panel-toggle'
      {...props}
      className={classNames(props.className, 'lg:relative')}
      useClickOutside={true}
      squareRootClassName={classNames(
        'backdrop-blur-sm lg:rounded-2xl absolute z-[19] bg-black/70',
        'bottom-0 left-0 right-0 top-0',
        'lg:-right-2 lg:-top-2 lg:bottom-auto lg:left-auto'
      )}
      squareRootOpenClassName='lg:w-60 w-full'
      squareRootCloseClassName='w-0'
      element={({ onClick, isOpen }) => (
        <PanelSelector
          className={classNames('relative', {
            'lg:z-[20]': isOpen
          })}
          isOpen={isOpen}
          onClick={onClick}
        />
      )}
    >
      {({ onClick }) => (
        <>
          <div className='absolute right-6 top-6 lg:hidden' onClick={onClick}>
            <XMarkIcon width={32} />
          </div>
          <PanelContainer />
        </>
      )}
    </ToggleContent>
  )
}
export default Panel
