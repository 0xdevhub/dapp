import {
  type HTMLProps,
  createElement,
  Children,
  cloneElement,
  ReactNode
} from 'react'
import classNames from 'classnames'

export const Sizes = {
  default: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl'
} as const

export const Variant = {
  p: {
    classes: ['font-normal', Sizes.base].concat(' ')
  },
  span: {
    classes: ['font-light', Sizes.default].concat(' ')
  }
} as const

export type TextProps = Omit<HTMLProps<HTMLElement>, 'size'> & {
  size?: keyof typeof Sizes
  variant?: keyof typeof Variant
  as?: keyof typeof Variant
  children: ReactNode
}

export const Text = ({
  as = 'p',
  variant = 'p',
  size = 'default',
  children,
  className,
  ...props
}: TextProps) => {
  return !as
    ? cloneElement(Children.only(<>{children}</>), {
        ...props,
        className: classNames(
          className,
          size ? Sizes[size] : Variant[variant].classes
        )
      })
    : createElement(
        as,
        {
          ...props,
          className: classNames(
            className,
            size ? Sizes[size] : Variant[as || variant].classes
          )
        },
        children
      )
}

export default Text
