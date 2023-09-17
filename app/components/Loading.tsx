import { type HTMLProps } from 'react'
import classNames from 'classnames'

export const Variant = {
  default: {
    classes:
      'bg-gradient-radial from-yellow-400 via-sky-400 to-lime-400  rotate-bg '
  },
  primary: {
    classes: 'bg-primary'
  },
  secondary: {
    classes: 'bg-secondary'
  },
  dark: {
    classes: 'bg-dark-blue'
  },
  green: {
    classes: 'bg-lime-400'
  }
} as const

export type LoadingProps = HTMLProps<HTMLDivElement> & {
  variant?: keyof typeof Variant
}

export const Loading = ({
  className,
  variant = 'default',
  ...props
}: LoadingProps) => {
  return (
    <div {...props} className={classNames(className, 'relative h-2 ')}>
      <div
        className={classNames(
          'animate-line-loading z-1 absolute h-2 rounded-md',
          Variant[variant].classes
        )}
      />
      <div
        className={classNames(
          'z-0 blur-sm',
          'animate-line-loading absolute h-2 rounded-md',
          Variant[variant].classes
        )}
      />
    </div>
  )
}

export default Loading
