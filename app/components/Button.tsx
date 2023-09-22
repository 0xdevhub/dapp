import { type ReactNode, type ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'
import { Loading, LoadingProps } from '@/app/components/Loading'

export const Sizes = {
  default: {
    classes: 'px-2 py-1 text-sm'
  },
  md: {
    classes: 'px-3 py-1.5 text-base'
  }
} as const

export const Variant = {
  default: {
    classes: 'bg-third-300 text-cyan-50 dark:bg-lime-400 dark:text-third-500',
    disabled:
      'bg-third-300/70 text-cyan-50/80 dark:bg-lime-400/70 dark:text-third-300',
    hover: 'hover:bg-third-300/90 dark:hover:bg-lime-400/90'
  }
} as const

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof Variant
  size?: keyof typeof Sizes
  loading?: boolean
  loadingProps?: LoadingProps
  iconBefore?: ReactNode
}

export const Button = ({
  loadingProps,
  children,
  loading,
  iconBefore,
  variant = 'default',
  size = 'default',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={classNames([
        'flex items-center',
        props.className,
        props.disabled ? Variant[variant].disabled : Variant[variant].classes,
        Variant[variant].hover,
        Sizes[size].classes
      ])}
    >
      {iconBefore && <span>{iconBefore}</span>}
      <span>{children}</span>
      <span
        className={classNames({
          'visible w-8 pl-2 opacity-100': loading,
          'invisible w-0 overflow-hidden pl-0 opacity-0': !loading,
          'opacity-50': props.disabled
        })}
      >
        <Loading {...loadingProps} />
      </span>
    </button>
  )
}

export default Button
