import { type HTMLProps } from 'react'
import Link from 'next/link'
import appConfig from '@/app.config'
import classNames from 'classnames'

import { Righteous } from 'next/font/google'

const font = Righteous({
  weight: ['400'],
  subsets: ['latin']
})

export const Logo = ({
  tabIndex,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  const defaultClasses = [
    'dark:from-yellow-300 dark:via-sky-300 dark:to-lime-300',
    'from-yellow-500 via-sky-500 to-lime-500',
    'animate-rotate-gradient bg-gradient-conic bg-300 bg-clip-text font-extrabold text-transparent'
  ]

  return (
    <div {...props} className={classNames(className, font.className)}>
      <Link
        title={appConfig.name}
        className='select-none text-2xl'
        href='/'
        tabIndex={tabIndex}
        translate='no'
      >
        <h1 className='flex items-center space-x-px'>
          <span className='dark:text-white'>chain</span>
          <span className='z-1 relative'>
            <span
              className={classNames([
                defaultClasses,
                'shadow-black dark:drop-shadow'
              ])}
            >
              hub
            </span>
            <span
              aria-hidden
              className={classNames([
                defaultClasses,
                'absolute left-0 right-0 h-full w-full opacity-75 blur-sm'
              ])}
            >
              hub
            </span>
          </span>
        </h1>
      </Link>
    </div>
  )
}

export default Logo
