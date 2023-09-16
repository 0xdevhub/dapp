import { type HTMLProps } from 'react'
import classNames from 'classnames'

export const Separator = (props: HTMLProps<HTMLDivElement>) => (
  <span
    aria-hidden
    {...props}
    className={classNames(props.className, ' select-none text-white/20')}
  >
    |
  </span>
)

export default Separator
