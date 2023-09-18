'use client'

import { type ReactNode, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { useOnClickOutside, useToggle } from 'usehooks-ts'

export type ToggleContentOptions = {
  onClick: () => void
  isOpen: boolean
}

export type ToggleContentProps = {
  children: ReactNode | ((props: ToggleContentOptions) => ReactNode)
  element: ReactNode | ((props: ToggleContentOptions) => ReactNode)
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

  useEffect(() => {
    // console.log(ref)
  }, [ref])

  return (
    <div {...props} ref={ref}>
      {typeof element !== 'function'
        ? element
        : element({
            onClick: toggle,
            isOpen
          })}
      <div
        className={classNames(
          squareRootClassName,
          'overflow-hidden',
          isOpen
            ? squareRootOpenClassName ?? 'visible h-auto opacity-100'
            : squareRootCloseClassName ?? 'invisible h-0 opacity-0'
        )}
      >
        {typeof children !== 'function'
          ? children
          : children({
              onClick: toggle,
              isOpen
            })}
      </div>
    </div>
  )
}

export default ToggleContent
