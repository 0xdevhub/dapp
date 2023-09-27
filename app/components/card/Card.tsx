import { type HTMLProps, createElement } from 'react'
import classNames from 'classnames'

export type CardProps = HTMLProps<HTMLDivElement> & {
  as?: string
  bgOpacity?: number
}

export const Card = ({
  children,
  className,
  bgOpacity = 0.6,
  as: Component = 'div',
  ...props
}: CardProps) => {
  return (
    <>
      <style jsx>
        {`
          .card {
            --bg-opacity: ${bgOpacity};
          }
        `}
      </style>
      <div className='card'>
        {createElement(
          Component,
          {
            ...props,
            className: classNames(
              className,
              'bg-white dark:bg-black',
              `!bg-opacity-[var(--bg-opacity)]`
            )
          },
          children
        )}
      </div>
    </>
  )
}

export default Card
