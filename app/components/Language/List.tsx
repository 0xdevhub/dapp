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
              'flex items-center justify-between space-x-2 py-2',
              {
                'cursor-not-allowed text-gray-600': locale === currentLocale
              },
              {
                'cursor-pointer hover:text-white': locale !== currentLocale
              }
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
