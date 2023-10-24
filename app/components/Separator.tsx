import { type HTMLProps } from 'react'
import classNames from 'classnames'

export const Separator = (props: HTMLProps<HTMLDivElement>) => (
  <span
    aria-hidden
    {...props}
    className={classNames(
      props.className,
      ' select-none text-stone-400/30 dark:text-secondary/30'
    )}
  >
    |
  </span>
)

export default Separator
