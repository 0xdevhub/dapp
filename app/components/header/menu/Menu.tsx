'use client'

import { useEffect, type HTMLProps, useCallback } from 'react'
import { ArrowLeftIcon, Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import { useToggle, useMediaQuery } from 'usehooks-ts'
import classNames from 'classnames'
import { MenuList } from './MenuList'
import { useI18n } from '@/locales/client'
import { Card } from '@/app/components/card/Card'
import { MenuListItemProps } from './MenuListItem'

type MenuProps = HTMLProps<HTMLElement> & {
  navLinks: MenuListItemProps[]
}

export const Menu = ({ tabIndex, navLinks, ...props }: MenuProps) => {
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
      aria-labelledby='menu'
    >
      <span id='menu' aria-hidden className='hidden'>
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
        <MenuList
          tabIndex={tabIndex}
          navLinks={navLinks}
          className='flex space-x-8'
          onItemClick={handleToggle}
        />
      </div>
      <Card
        className={classNames([
          'bottom-0 right-0 top-0 z-10 overflow-hidden',
          'fixed z-[999] h-screen w-screen',
          isOpened ? 'visible left-0' : 'invisible -left-full'
        ])}
      >
        {isOpened && (
          <div className='flex-col space-y-6 p-6'>
            <ArrowLeftIcon
              width={24}
              className='cursor-pointer dark:text-gray-300'
              onClick={toggle}
            />

            <MenuList
              tabIndex={tabIndex}
              navLinks={navLinks}
              className='flex flex-col space-y-4'
              onItemClick={handleToggle}
            />
          </div>
        )}
      </Card>
    </nav>
  )
}

export default Menu
