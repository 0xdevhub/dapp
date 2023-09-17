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
      >
        <h1 className='flex items-center space-x-px'>
          <span className='font-light text-white'>defi</span>
          <span className='relative'>
            <span
              className={classNames([
                'animate-rotate-gradient bg-gradient-conic from-yellow-400 via-sky-400 to-lime-400 bg-300 bg-clip-text font-extrabold text-transparent',
                'shadow-black drop-shadow'
              ])}
            >
              hub
            </span>
            <span
              aria-hidden
              className={classNames([
                'absolute animate-rotate-gradient bg-gradient-conic from-yellow-400 via-sky-400 to-lime-400 bg-300 bg-clip-text font-extrabold text-transparent blur',
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
