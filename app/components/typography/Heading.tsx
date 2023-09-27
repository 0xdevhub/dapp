import { type HTMLProps, createElement } from 'react'
import classNames from 'classnames'

export const Variant = {
  h1: {
    classes: 'text-3xl lg:text-2xl font-extrabold'
  },
  h2: {
    classes: 'text-2xl lg:text-xl font-bold'
  },
  h3: {
    classes: 'text-base lg:text-lg font-medium lg:font-bold'
  },
  h4: {
    classes: 'text-base font-medium'
  },
  h5: {
    classes: 'text-base font-normal'
  }
} as const

export type HeadingProps = HTMLProps<HTMLDivElement> & {
  as?: keyof typeof Variant
  variant?: keyof typeof Variant
}

export const Heading = ({
  as: Component = 'h1',
  variant,
  children,
  ...props
}: HeadingProps) => {
  return createElement(
    Component,
    {
      ...props,
      className: classNames(
        props.className,
        'text-stone-500 dark:text-cyan-50',
        Variant[variant ?? Component].classes
      )
    },
    children
  )
}

export default Heading
