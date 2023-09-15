'use client'

import { type ReactNode, useState } from 'react'
import classNames from 'classnames'
import { useElementSize } from 'usehooks-ts'

export type ToggleContentOptions = {
  onClick?: () => void
}
export type ToggleContentProps = {
  children: ReactNode
  element: (props: ToggleContentOptions) => ReactNode
  squareMinHeight?: string
  className?: string
  squareRootClassName?: string
  squareClassName?: string
}

export const ToggleContent = ({
  children,
  element,
  squareRootClassName,
  squareClassName,
  squareMinHeight,
  ...props
}: ToggleContentProps) => {
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
            --square-min-height: ${squareMinHeight || 'auto'};
          }

          .square-root {
            height: var(--square-size);
          }
        `}
      </style>
      <div {...props}>
        {element({
          onClick
        })}
        <div
          className={classNames(
            squareRootClassName,
            'square-root overflow-hidden transition-all duration-300',
            isOpen
              ? 'visible h-full w-full blur-0 lg:w-60'
              : 'invisible h-0 w-0 blur-xl'
          )}
        >
          {isOpen && (
            <div
              ref={squareRef}
              className={classNames(
                squareClassName,
                'h-full min-h-[var(--square-min-height)]'
              )}
            >
              {children}
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ToggleContent
