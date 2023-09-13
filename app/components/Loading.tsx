import { type HTMLProps } from 'react'
import classNames from 'classnames'

export const Loading = ({ className }: HTMLProps<HTMLDivElement>) => {
  return (
    <div className={classNames(className, 'relative h-2')}>
      <div
        className={classNames(
          'animated-line-loading rotate-bg z-1 absolute h-2 rounded-md',
          'bg-gradient-radial from-yellow-400 via-sky-400 to-green-400'
        )}
      />
      <div
        className={classNames(
          'z-0 blur',
          'animated-line-loading rotate-bg absolute h-2 rounded-md',
          'bg-gradient-radial from-yellow-400 via-sky-400 to-green-400'
        )}
      />
    </div>
  )
}

export default Loading
