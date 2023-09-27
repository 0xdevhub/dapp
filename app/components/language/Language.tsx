import { type HTMLProps } from 'react'
import classNames from 'classnames'

import {
  ToggleContent,
  ToggleContentProps
} from '@/app/components/toggle/ToggleContent'

import { LanguageSelector } from './Selector'
import { LanguageList } from './List'

export const Language = (
  props: HTMLProps<HTMLDivElement> & Partial<ToggleContentProps>
) => {
  return (
    <ToggleContent
      key='language-toggle'
      {...props}
      className={classNames(props.className, 'flex flex-col space-y-2')}
      element={({ onClick, isOpen }) => (
        <LanguageSelector isOpen={isOpen} onClick={onClick} />
      )}
    >
      <LanguageList />
    </ToggleContent>
  )
}

export default Language
