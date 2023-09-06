import Link from 'next/link'
import appConfig from '@/app.config'
import classNames from 'classnames'
import { HTMLProps } from 'react'

export const Logo = ({
  className,
  tabIndex,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props}>
      <Link
        title={appConfig.name}
        className={classNames(['select-none text-2xl'])}
        href='/'
        tabIndex={tabIndex}
      >
        <span className='flex items-center space-x-px'>
          <span className='font-light'>defi</span>
          <span className='rotate-bg bg-gradient-conic from-yellow-400 via-sky-400 to-green-400 bg-clip-text font-extrabold text-transparent'>
            hub
          </span>
        </span>
      </Link>
    </div>
  )
}

export default Logo
