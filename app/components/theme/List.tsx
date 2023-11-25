'use client'

import { Children, type HTMLProps } from 'react'
import classNames from 'classnames'
import { useDarkMode } from 'usehooks-ts'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'
import { useI18n } from '@/locales/client'
import { Text } from '@/app/components/typography'

export const ThemeList = (props: HTMLProps<HTMLUListElement>) => {
  const t = useI18n()
  const { isDarkMode, enable, disable } = useDarkMode()

  const themes = [
    {
      label: t('THEME.LIGHT'),
      onClick: disable,
      active: !isDarkMode
    },
    {
      label: t('THEME.DARK'),
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
            <Text as='span'>{theme.label}</Text>
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
