import { type HTMLProps, createElement } from 'react'
import classNames from 'classnames'

export const Variant = {
  h1: {
    classes:
      'text-3xl lg:text-2xl font-extrabold text-stone-500 dark:text-cyan-50'
  },
  h2: {
    classes: 'text-2xl lg:text-xl font-bold text-stone-500 dark:text-cyan-50'
  },
  h3: {
    classes:
      'text-base lg:text-lg font-medium lg:font-bold text-stone-500 dark:text-cyan-50'
  },
  h4: {
    classes: 'text-base font-medium text-stone-500 dark:text-cyan-50'
  },
  h5: {
    classes: 'text-base font-normal text-stone-500 dark:text-cyan-50'
  }
} as const

export type HeadingProps = HTMLProps<HTMLDivElement> & {
  as?: keyof typeof Variant
  variant?: keyof typeof Variant
}

export const Heading = ({
  as: Component = 'h1',
  variant,
  ...props
}: HeadingProps) => {
  return createElement(
    Component,
    {
      ...props,
      className: classNames(
        props.className,
        Variant[variant ?? Component].classes
      )
    },
    props.children
  )
}

export default Heading
