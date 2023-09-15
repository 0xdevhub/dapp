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
import { useOnClickOutside, useToggle } from 'usehooks-ts'

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
  useClickOutside?: boolean
}

export const ToggleContent = ({
  children,
  element,
  squareRootClassName,
  squareRootOpenClassName,
  squareRootCloseClassName,
  squareClassName,
  useClickOutside,
  ...props
}: ToggleContentProps) => {
  const [isOpen, toggle] = useToggle(false)

  const ref = useRef(null)

  const handleClickOutside = () => {
    if (!useClickOutside || !isOpen) return
    toggle()
  }

  useOnClickOutside(ref, handleClickOutside)

  const child = Children.only(children) as ReactElement

  return (
    <div {...props} ref={ref}>
      {element({
        onClick: toggle
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
