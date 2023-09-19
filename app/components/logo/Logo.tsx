import { type HTMLProps } from 'react'
import Link from 'next/link'
import appConfig from '@/app.config'
import classNames from 'classnames'

export const Logo = ({ tabIndex, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props}>
      <Link
        title={appConfig.name}
        className='select-none text-2xl'
        href='/'
        tabIndex={tabIndex}
        translate='no'
      >
        <h1 className='flex items-center space-x-px'>
          <span className='dark:text-white'>chain</span>
          <span className='relative'>
            <span
              className={classNames([
                'dark:from-yellow-400 dark:via-sky-400 dark:to-lime-400',
                'from-primary-dark via-secondary-dark to-lime-700',
                'animate-rotate-gradient bg-gradient-conic bg-300 bg-clip-text font-extrabold text-transparent',
                'shadow-black drop-shadow'
              ])}
            >
              hub
            </span>
            <span
              aria-hidden
              className={classNames([
                'dark:from-yellow-400 dark:via-sky-400 dark:to-lime-400',
                'from-yellow-700 via-sky-700 to-lime-700',
                'absolute animate-rotate-gradient bg-gradient-conic bg-300 bg-clip-text font-extrabold text-transparent blur',
                'left-0 right-0 z-[-1]'
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
