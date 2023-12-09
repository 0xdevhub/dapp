import { type ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'
import { Loading, LoadingProps } from '@/app/components/Loading'

export const Sizes = {
  default: {
    classes: 'px-2 py-1 text-sm'
  },
  md: {
    classes: 'px-3 py-1.5 text-base'
  },
  lg: {
    classes: 'px-4 py-2 text-lg'
  }
} as const

export const Variant = {
  default: {
    classes: 'bg-third-300 text-cyan-50 dark:bg-lime-400 dark:text-third-500',
    disabled:
      'bg-third-300/70 text-cyan-50/80 dark:bg-lime-400/70 dark:text-third-300 cursor-not-allowed',
    hover: 'hover:bg-third-300/90 dark:hover:bg-lime-400/90'
  }
} as const

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof Variant
  size?: keyof typeof Sizes
  loading?: boolean
  loadingProps?: LoadingProps
}

export const Button = ({
  loadingProps,
  children,
  loading,
  variant = 'default',
  size = 'default',
  className,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      className={classNames([
        'flex w-full items-center justify-center rounded-md',
        className,
        disabled ? Variant[variant].disabled : Variant[variant].classes,
        Variant[variant].hover,
        Sizes[size].classes
      ])}
    >
      <span>{children}</span>
      <span
        className={classNames({
          'visible w-8 pl-2 opacity-100': loading,
          'invisible w-0 overflow-hidden pl-0 opacity-0': !loading,
          'opacity-50': disabled
        })}
      >
        <Loading {...loadingProps} />
      </span>
    </button>
  )
}

export default Button
