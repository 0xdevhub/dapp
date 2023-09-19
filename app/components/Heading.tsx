import classNames from 'classnames'
import { type HTMLProps, createElement } from 'react'

export const Variant = {
  h1: {
    classes: 'text-xl lg:text-2xl font-extrabold text-stone-500 dark:text-white'
  },
  h2: {
    classes: 'text-xl font-bold text-stone-500 dark:text-white'
  },
  h3: {
    classes:
      'text-base lg:text-lg font-medium lg:font-bold text-stone-500 dark:text-white'
  },
  h4: {
    classes: 'text-base font-medium text-stone-500 dark:text-white'
  },
  h5: {
    classes: 'text-base font-normal text-stone-500 dark:text-white'
  }
} as const

export type HeadingProps = HTMLProps<HTMLDivElement> & {
  variant?: keyof typeof Variant
}

export const Heading = ({ variant = 'h1', ...props }: HeadingProps) => {
  const CustomTag = {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    h5: 'h5'
  }[variant]

  return createElement(
    CustomTag,

    {
      ...props,
      className: classNames(props.className, Variant[variant].classes)
    },
    props.children
  )
}

export default Heading
