'use client'

import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { ToggleContent } from '@/app/components/ToggleContent'
import { LanguageSelector } from './Selector'
import { LanguageContainer } from './Container'
import { XMarkIcon } from '@heroicons/react/24/outline'

export const Language = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <ToggleContent
      key='language-toggle'
      {...props}
      className={classNames(props.className, 'lg:relative')}
      useClickOutside={true}
      squareRootClassName={classNames(
        'backdrop-blur-sm lg:rounded-2xl absolute z-[18] bg-black/90 lg:bg-black/70',
        'bottom-0 left-0 right-0 top-0',
        'lg:-right-2 lg:-top-2 lg:bottom-auto lg:left-auto'
      )}
      squareRootOpenClassName='lg:w-60 w-full'
      squareRootCloseClassName='w-0'
      element={({ onClick, isOpen }) => (
        <LanguageSelector
          isOpen={isOpen}
          onClick={onClick}
          className={classNames('relative', {
            'lg:z-[20]': isOpen
          })}
        />
      )}
    >
      {({ onClick }) => (
        <>
          <div className='absolute right-6 top-6 lg:hidden' onClick={onClick}>
            <XMarkIcon width={32} />
          </div>
          <LanguageContainer
            className={classNames(props.className, 'lg:h-full')}
          />
        </>
      )}
    </ToggleContent>
  )
}

export default Language
