import { type HTMLProps, createElement } from 'react'
import classNames from 'classnames'

export type CardProps = HTMLProps<HTMLDivElement> & {
  as?: string
}

export const Card = ({
  children,
  className,
  as: Component = 'div',
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return createElement(
    Component,
    {
      ...props,
      className: classNames(className, 'bg-white/70 dark:bg-black/80')
    },
    children
  )
}

export default Card
