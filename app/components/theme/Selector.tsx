'use client'

import { type HTMLProps } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import { useDarkMode } from 'usehooks-ts'

export type ThemeSelectorProps = HTMLProps<HTMLDivElement> & {
  isOpen?: boolean
}

export const ThemeSelector = ({ isOpen, ...props }: ThemeSelectorProps) => {
  const { isDarkMode } = useDarkMode(true)

  return (
    <div
      {...props}
      className={classNames(
        props.className,
        'flex cursor-pointer justify-between space-x-2'
      )}
    >
      <span className='text-sm'>{isDarkMode ? 'Escuro' : 'Claro'}</span>
      <ChevronDownIcon
        width={18}
        className={classNames('transform', {
          'rotate-180': isOpen,
          'rotate-0': !isOpen
        })}
      />
    </div>
  )
}

export default ThemeSelector
