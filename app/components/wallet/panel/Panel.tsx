'use client'

import { type HTMLProps, type ReactNode, useState } from 'react'
import classNames from 'classnames'
import { DisconnectButton } from '../button/Disconnect'
import { PanelDetails } from './Details'
import { useElementSize } from 'usehooks-ts'

export type PanelButtonProps = {
  onClick?: () => void
}
export type PanelProps =
  | HTMLProps<HTMLDivElement>
  | ({
      children: (props: PanelButtonProps) => ReactNode
    } & Pick<HTMLProps<HTMLDivElement>, 'className'>)

export const Panel = ({ children, ...props }: PanelProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [squareRef, { height }] = useElementSize()

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <style jsx>
        {`
          :global(.square-root) {
            --square-size: ${!isOpen ? '0' : height / 16 + 'rem'};
          }

          .square-root {
            height: var(--square-size);
          }
        `}
      </style>
      <div {...props} className={classNames(props?.className, 'lg:relative')}>
        <div className='relative z-20'>
          {typeof children === 'function'
            ? children({
                onClick
              })
            : children}
        </div>
        <div
          className={classNames(
            'backdrop-blur-sm transition-all duration-300 lg:rounded-2xl',
            'square-root absolute z-[19] overflow-hidden bg-black/70',
            'bottom-0 right-0 top-0 lg:-right-2 lg:-top-2 lg:bottom-auto lg:left-auto',
            isOpen
              ? 'visible h-full w-full blur-0 lg:w-60'
              : 'invisible h-0 w-0 blur-xl'
          )}
        >
          {isOpen && (
            <div
              ref={squareRef}
              className={classNames(
                'flex flex-col justify-between space-y-10',
                'w-full px-12 py-8 lg:px-6 lg:py-4',
                'gradient-border-bg before:from-lime-400 before:to-sky-400',
                'before:bg-gradient-to-b lg:before:rounded-2xl lg:before:p-0.5',
                'h-full min-h-[20rem]'
              )}
            >
              <PanelDetails />
              <DisconnectButton />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default Panel
