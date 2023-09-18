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
      onClick: disable,
      active: !isDarkMode
    },
    {
      label: 'Escuro',
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
              'dark:bg-black/70 hover:dark:bg-black/40 hover:dark:text-white',
              'bg-white/70 hover:bg-white/40 ',
              'flex cursor-pointer items-center justify-between space-x-2 p-2'
            )}
            onClick={theme.onClick}
          >
            <span>{theme.label}</span>
            {theme.active && (
              <span>
                <CheckBadgeIcon
                  width={18}
                  className='text-green-400'
                  title='Ativo'
                />
              </span>
            )}
          </li>
        ))
      )}
    </ul>
  )
}

export default ThemeList
