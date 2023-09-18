'use client'

import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { ToggleContent } from '@/app/components/toggle/ToggleContent'
import { ThemeSelector } from './Selector'
import { ThemeList } from './List'

export const Theme = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <ToggleContent
      key='Theme-toggle'
      {...props}
      className={classNames(props.className, 'flex flex-col space-y-2')}
      element={({ onClick, isOpen }) => (
        <ThemeSelector isOpen={isOpen} onClick={onClick} />
      )}
    >
      <ThemeList />
    </ToggleContent>
  )
}

export default Theme
