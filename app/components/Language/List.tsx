'use client'

import { Children, type HTMLProps } from 'react'
import classNames from 'classnames'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import { localeConfig, Locale } from '@/locales/config'

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
              'cursor-pointer bg-black/70 p-2 hover:bg-black/40 hover:text-white',
              'flex items-center justify-between space-x-2'
            )}
          >
            {locale}
          </li>
        ))
      )}
    </ul>
  )
}

export default LanguageList
