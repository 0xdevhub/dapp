'use client'

import { Children, type HTMLProps } from 'react'
import classNames from 'classnames'
import { useDarkMode } from 'usehooks-ts'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

export const ThemeList = (props: HTMLProps<HTMLUListElement>) => {
  const { isDarkMode, enable, disable } = useDarkMode()

  const themes = [
    {
      label: 'Claro',
      value: 'light',
      onClick: disable,
      active: !isDarkMode
    },
    {
      label: 'Escuro',
      value: 'dark',
      onClick: enable,
      active: isDarkMode
    }
  ]

  return (
    <ul {...props}>
      {Children.toArray(
        themes.map((theme) => (
          <li
            className={classNames(
              'cursor-pointer bg-black/70 p-2 hover:bg-black/40 hover:text-white',
              'flex items-center justify-between space-x-2'
            )}
            {...theme}
          >
            <span>{theme.label}</span>
            {theme.active && (
              <CheckBadgeIcon
                width={18}
                className='text-green-400'
                title='Ativo'
              />
            )}
          </li>
        ))
      )}
    </ul>
  )
}

export default ThemeList
