'use client'

import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { Heading } from '@/app/components/typography/Heading'

import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'
import { Theme } from '@/app/components/theme'
import { Language } from '@/app/components/language'

export const SettingsContainer = (props: HTMLProps<HTMLDivElement>) => {
  const t = useI18n()
  return (
    <div
      {...props}
      className={classNames(props.className, 'flex flex-col space-y-4 p-6')}
    >
      <div className='flex flex-col space-y-2'>
        <Heading as='h4'>{t(Locales.LANGUAGE)}</Heading>
        <Language />
      </div>
      <div className='flex flex-col space-y-2'>
        <Heading as='h4'>{t(Locales.THEME)}</Heading>
        <Theme />
      </div>
    </div>
  )
}

export default SettingsContainer
