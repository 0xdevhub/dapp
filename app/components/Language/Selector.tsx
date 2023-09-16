'use client'

import { Children, type HTMLProps } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import ToggleContent from '@/app/components/ToggleContent'
import { useChangeLocale, useCurrentLocale } from '@/locales/client'
import Heading from '@/app/components/Heading'
import { localeConfig, Locale } from '@/locales/config'

export const LanguageSelector = (props: HTMLProps<HTMLDivElement>) => {
  const currentLocale = useCurrentLocale()
  const changeLocale = useChangeLocale()

  return (
    <ToggleContent
      key='language-toggle'
      className='lg:relative'
      useClickOutside={true}
      squareRootClassName={classNames(
        'backdrop-blur-sm lg:rounded-2xl absolute z-[18] bg-black/70',
        'bottom-0 right-0 top-0 lg:-right-2 lg:-top-2 lg:bottom-auto lg:left-auto'
      )}
      squareRootOpenClassName='lg:w-60 w-full'
      squareRootCloseClassName='w-0'
      element={({ onClick, isOpen }) => (
        <div
          className={classNames('relative', {
            ' z-[20]': isOpen
          })}
        >
          <div
            onClick={onClick}
            className='flex cursor-pointer items-center space-x-2 p-4'
          >
            <div className='flex items-center space-x-2'>
              <span className='font-bold'>{currentLocale}</span>
            </div>
            <ChevronDownIcon
              width={18}
              className={classNames('transform', {
                'rotate-180': isOpen,
                'rotate-0': !isOpen
              })}
            />
          </div>
        </div>
      )}
    >
      <div {...props} className={classNames(props.className, 'h-full p-6')}>
        <Heading variant='h4'>Idioma</Heading>
        <div>
          <ul>
            {Children.toArray(
              localeConfig.locales.map((locale) => (
                <li
                  onClick={() =>
                    locale !== currentLocale && changeLocale(locale as Locale)
                  }
                  className={classNames(
                    'flex items-center justify-between space-x-2 py-2',
                    {
                      'cursor-not-allowed text-gray-600':
                        locale === currentLocale
                    },
                    {
                      'cursor-pointer hover:text-white':
                        locale !== currentLocale
                    }
                  )}
                >
                  {locale}
                </li>
              ))
            )}
          </ul>
        </div>
      </div>
    </ToggleContent>
  )
}

export default LanguageSelector
