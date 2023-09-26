import { type HTMLProps, Children, cloneElement, ReactElement } from 'react'
import { ToggleContent } from './ToggleContent'
import classNames from 'classnames'
import { XMarkIcon } from '@heroicons/react/24/outline'

export type OverlayToggleProps = HTMLProps<HTMLDivElement> & {
  selector: ReactElement
  container: ReactElement
}

export const OverlayToggle = ({
  selector,
  container,
  className,
  ...props
}: OverlayToggleProps) => {
  return (
    <ToggleContent
      {...props}
      className={classNames(className, 'lg:relative')}
      useClickOutside={true}
      squareRootClassName={classNames(
        'lg:rounded-lg absolute z-[19]',
        'bottom-0 left-0 right-0 top-0',
        'lg:-right-2 lg:-top-2 lg:bottom-auto lg:left-auto backdrop-blur',
        'lg:border-secondary lg:dark:border-lime-400 lg:border-2'
      )}
      squareRootOpenClassName='visible opacity-100 lg:w-60 lg:h-auto h-screen w-screen'
      squareRootCloseClassName='invisible opacity-0 w-0 h-0'
      element={({ onClick, isOpen }) =>
        cloneElement(Children.only(selector), {
          className: classNames('relative', {
            'lg:z-[20]': isOpen
          }),
          onClick: onClick,
          isOpen: isOpen
        })
      }
    >
      {({ onClick }) => (
        <div className='flex h-full flex-col overflow-y-auto'>
          <div className='ml-6 mt-6 flex-none lg:hidden' onClick={onClick}>
            <XMarkIcon width={24} title='exit' />
          </div>
          {cloneElement(Children.only(container), {
            className: 'flex-1'
          })}
        </div>
      )}
    </ToggleContent>
  )
}
export default OverlayToggle
