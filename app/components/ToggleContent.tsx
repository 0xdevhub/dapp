'use client'

import {
  type ReactNode,
  useState,
  Children,
  cloneElement,
  ReactElement,
  useRef
} from 'react'
import classNames from 'classnames'
import { useElementSize } from 'usehooks-ts'

export type ToggleContentOptions = {
  onClick?: () => void
}

export type ToggleContentProps = {
  children: ReactNode
  element: (props: ToggleContentOptions) => ReactNode
  className?: string
  squareRootClassName?: string
  squareClassName?: string
  squareRootOpenClassName?: string
  squareRootCloseClassName?: string
}

export const ToggleContent = ({
  children,
  element,
  squareRootClassName,
  squareRootOpenClassName,
  squareRootCloseClassName,
  squareClassName,
  ...props
}: ToggleContentProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const child = Children.only(children) as ReactElement

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div {...props}>
      {element({
        onClick
      })}
      <div
        className={classNames(
          squareRootClassName,
          'overflow-hidden ',
          isOpen
            ? ['visible h-auto opacity-100', squareRootOpenClassName]
            : ['invisible h-0 opacity-0', squareRootCloseClassName]
        )}
      >
        {cloneElement(child, {
          className: classNames(squareClassName)
        })}
      </div>
    </div>
  )
}

export default ToggleContent
