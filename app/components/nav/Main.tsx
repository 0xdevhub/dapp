'use client'

import { useEffect, type HTMLProps } from 'react'
import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import { useToggle, useMediaQuery } from 'usehooks-ts'
import classNames from 'classnames'
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline'
import { WalletConnectButton } from '@/app/components/wallet/buttons'
import { NavList } from './list'

export type NavLink = {
  label: string
  href: string
}

type NavMainProps = HTMLProps<HTMLElement> & {
  navLinks: NavLink[]
}

export const NavMain = ({ tabIndex, navLinks, ...props }: NavMainProps) => {
  const [isOpened, toggle] = useToggle()
  const matches = useMediaQuery(`(min-width: 1024px`)

  useEffect(() => {
    if (matches && isOpened) {
      toggle()
    }
  }, [matches, isOpened])

  return (
    <nav
      {...props}
      className={classNames(props.className, 'text-base tracking-wide')}
      aria-labelledby='navmain'
    >
      <span id='navmain' aria-hidden className='hidden'>
        Menu
      </span>
      <div className='lg:hidden'>
        <Bars3BottomLeftIcon
          tabIndex={tabIndex}
          width={24}
          className='cursor-pointer text-gray-300'
          onClick={toggle}
        />
      </div>
      <div className='hidden lg:inline-flex'>
        <NavList navLinks={navLinks} className='flex space-x-8' />
      </div>
      {isOpened && (
        <div className='z-10'>
          <div className='fixed bottom-0 left-0 right-0 top-0 h-screen w-screen'>
            <div className='relative z-10 flex flex-col space-y-4 p-12'>
              <ArrowLongLeftIcon
                width={36}
                className='cursor-pointer text-gray-300'
                onClick={toggle}
              />
              <NavList
                navLinks={navLinks}
                className='flex flex-col space-y-2 '
              />
              <div className='w-full'>
                <WalletConnectButton />
              </div>
            </div>
            <div className='absolute top-0 z-0 h-full w-full bg-black/90' />
          </div>
        </div>
      )}
    </nav>
  )
}

export default NavMain
