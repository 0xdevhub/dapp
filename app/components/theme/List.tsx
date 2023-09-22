'use client'

import { Children, type HTMLProps } from 'react'
import classNames from 'classnames'
import { useDarkMode } from 'usehooks-ts'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'

export const ThemeList = (props: HTMLProps<HTMLUListElement>) => {
  const t = useI18n()
  const { isDarkMode, enable, disable } = useDarkMode()

  const themes = [
    {
      label: t(Locales.PANEL_THEME_TYPE_LIGHT_LABEL),
      onClick: disable,
      active: !isDarkMode
    },
    {
      label: t(Locales.PANEL_THEME_TYPE_DARK_LABEL),
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
              'dark:bg-black/75 hover:dark:bg-white/5 hover:dark:text-cyan-50',
              'bg-white/75 hover:bg-black/10',
              'flex cursor-pointer items-center justify-between space-x-2 p-2'
            )}
            onClick={theme.onClick}
          >
            <span>{theme.label}</span>
            {theme.active && (
              <span>
                <CheckBadgeIcon width={18} className='text-green-400' />
              </span>
            )}
          </li>
        ))
      )}
    </ul>
  )
}

export default ThemeList
