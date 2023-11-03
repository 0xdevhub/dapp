'use client'
import { type HTMLProps, createElement } from 'react'
import classNames from 'classnames'

export const Sizes = {
  default: 'text-sm',
  md: 'text-md',
  base: 'text-base'
} as const

export const Variant = {
  p: {
    classes: 'font-normal'
  },
  span: {
    classes: 'font-light'
  }
} as const

export type TextProps = Omit<HTMLProps<HTMLElement>, 'size'> & {
  as?: keyof typeof Variant
  size?: keyof typeof Sizes
  variant?: keyof typeof Variant
}

export const Text = ({
  as: Component = 'p',
  variant = 'p',
  size = 'default',
  children,
  className,
  ...props
}: TextProps) => {
  return createElement(
    Component,
    {
      ...props,
      className: classNames(
        className,
        Variant[Component ?? variant].classes,
        Sizes[size]
      )
    },
    children
  )
}

export default Text
