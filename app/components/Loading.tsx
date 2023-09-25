import { type HTMLProps } from 'react'
import classNames from 'classnames'

export const Variant = {
  default: {
    classes:
      'bg-gradient-radial from-yellow-400 via-sky-400 to-lime-400 rotate-bg '
  },
  primary: {
    classes: 'bg-primary'
  },
  secondary: {
    classes: 'bg-secondary'
  },
  dark: {
    classes: 'bg-third-500'
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
          'z-1 absolute h-2 animate-line-loading rounded-md',
          Variant[variant].classes
        )}
      />
      <div
        className={classNames(
          'z-0 blur-sm',
          'absolute h-2 animate-line-loading rounded-md',
          Variant[variant].classes
        )}
      />
    </div>
  )
}

export default Loading
