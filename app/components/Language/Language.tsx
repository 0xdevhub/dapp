'use client'

import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { ToggleContent } from '@/app/components/ToggleContent'
import { LanguageSelector } from './Selector'
import { LanguagePanel } from './Container'

export const Language = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <ToggleContent
      key='language-toggle'
      className='lg:relative'
      useClickOutside={true}
      squareRootClassName={classNames(
        'backdrop-blur-sm lg:rounded-2xl absolute z-[18] bg-black/70',
        'bottom-0 right-0 top-0 lg:-right-2 lg:-top-2 lg:bottom-auto lg:left-auto'
      )}
      squareRootOpenClassName='lg:w-60 w-full'
      squareRootCloseClassName='w-0'
      element={({ onClick, isOpen }) => (
        <LanguageSelector
          isOpen={isOpen}
          onClick={onClick}
          className={classNames('relative', {
            'z-[20]': isOpen
          })}
        />
      )}
    >
      <LanguagePanel {...props} />
    </ToggleContent>
  )
}

export default Language
