import type { HTMLProps } from 'react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import { NavList } from './list'
import classNames from 'classnames'

export type NavLink = {
  label: string
  href: string
}

type NavMainProps = HTMLProps<HTMLElement> & {
  navLinks: NavLink[]
}

export const NavMain = ({ tabIndex, navLinks, ...props }: NavMainProps) => {
  return (
    <nav {...props} className={classNames(props.className, 'text-base')}>
      <div className='lg:hidden'>
        <Bars3BottomLeftIcon
          tabIndex={tabIndex}
          width={24}
          className='cursor-pointer text-gray-300'
        />
      </div>
      <div className='hidden lg:inline-flex'>
        <NavList navLinks={navLinks} className='flex space-x-8' />
      </div>
    </nav>
  )
}

export default NavMain
