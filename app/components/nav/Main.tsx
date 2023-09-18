'use client'

import { useEffect, type HTMLProps, useCallback } from 'react'
import { ArrowLeftIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import { useToggle, useMediaQuery } from 'usehooks-ts'
import classNames from 'classnames'
import { NavList } from './list'
import { Language } from '@/app/components/Language'
import { Heading } from '@/app/components/Heading'
import { Locales } from '@/locales/locales'
import { useI18n } from '@/locales/client'

export type NavLink = {
  label: string
  href: string
}

type NavMainProps = HTMLProps<HTMLElement> & {
  navLinks: NavLink[]
}

export const NavMain = ({ tabIndex, navLinks, ...props }: NavMainProps) => {
  const t = useI18n()
  const [isOpened, toggle] = useToggle()
  const matches = useMediaQuery(`(min-width: 1024px`)

  const handleToggle = useCallback(() => {
    if (matches) return
    toggle()
  }, [matches, toggle])

  useEffect(() => {
    if (matches && isOpened) {
      toggle()
    }
  }, [matches, toggle, isOpened])

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
          width={24}
          className='cursor-pointer dark:text-gray-300'
          onClick={toggle}
        />
      </div>
      <div className='hidden lg:inline-flex'>
        <NavList
          tabIndex={tabIndex}
          navLinks={navLinks}
          className='flex space-x-8'
          onItemClick={handleToggle}
        />
      </div>
      <div
        className={classNames([
          'z-10',
          isOpened ? 'visible left-0' : 'invisible -left-full'
        ])}
      >
        <div
          className={classNames([
            'fixed bottom-0 right-0 top-0 z-[999] h-screen w-screen overflow-hidden',
            'bg-white/75 backdrop-blur-sm dark:bg-black/75',
            isOpened ? 'left-0' : '-left-full'
          ])}
        >
          <div
            className={classNames([
              'relative z-10 flex h-full flex-col space-y-6 overflow-y-auto p-6',
              isOpened ? 'blur-0' : 'blur-lg'
            ])}
          >
            {isOpened && (
              <>
                <ArrowLeftIcon
                  width={24}
                  className='cursor-pointer dark:text-gray-300'
                  onClick={toggle}
                />

                <NavList
                  tabIndex={tabIndex}
                  navLinks={navLinks}
                  className='flex flex-col space-y-4'
                  onItemClick={handleToggle}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavMain
