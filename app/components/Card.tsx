import { type HTMLProps, createElement } from 'react'
import classNames from 'classnames'

export type CardProps = HTMLProps<HTMLDivElement> & {
  as?: string
  bgOpacity?: number
}

export const Card = ({
  children,
  className,
  bgOpacity = 0.6,
  as: Component = 'div',
  ...props
}: CardProps) =>
  createElement(
    Component,
    {
      ...props,
      style: {
        '--bg-opacity': bgOpacity
      },
      className: classNames(
        className,
        'bg-stone-200 dark:bg-black',
        `!bg-opacity-[var(--bg-opacity)]`
      )
    },
    children
  )

export default Card
