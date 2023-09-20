'use client'

import { Children, type HTMLProps } from 'react'
import classNames from 'classnames'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { localeConfig, Locale } from '@/locales/config'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

export const LanguageList = (props: HTMLProps<HTMLUListElement>) => {
  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()

  return (
    <ul {...props}>
      {Children.toArray(
        localeConfig.locales.map((locale) => (
          <li
            onClick={() =>
              locale !== currentLocale && changeLocale(locale as Locale)
            }
            className={classNames(
              'dark:bg-black/75 hover:dark:bg-black/40 hover:dark:text-cyan-50',
              'bg-white/75 hover:bg-white/40 ',
              'flex cursor-pointer items-center justify-between space-x-2 p-2'
            )}
          >
            <span>{locale}</span>
            {locale === currentLocale && (
              <CheckBadgeIcon width={18} className='text-green-400' />
            )}
          </li>
        ))
      )}
    </ul>
  )
}

export default LanguageList
