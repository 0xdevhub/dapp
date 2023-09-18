import classNames from 'classnames'
import { type HTMLProps, createElement } from 'react'

export const Variant = {
  h1: {
    classes: 'text-3xl font-bold dark:text-white'
  },
  h2: {
    classes: 'text-2xl font-bold dark:text-white'
  },
  h3: {
    classes: 'text-xl font-bold dark:text-white'
  },
  h4: {
    classes: 'text-base font-medium dark:text-white'
  },
  h5: {
    classes: 'text-base font-normal dark:text-white'
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
