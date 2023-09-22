import classNames from 'classnames'
import { HTMLProps } from 'react'

export const Card = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={classNames(
        className,
        'bg-white/75 backdrop-blur dark:bg-black/75'
      )}
    >
      {children}
    </div>
  )
}

export default Card
