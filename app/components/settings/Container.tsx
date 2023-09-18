import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { Heading } from '@/app/components/Heading'
import { Language } from '@/app/components/Language'
import { Theme } from '@/app/components/theme'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'

export const SettingsContainer = (props: HTMLProps<HTMLDivElement>) => {
  const t = useI18n()
  return (
    <div
      {...props}
      className={classNames(props.className, 'flex flex-col space-y-4 p-6')}
    >
      <div className='flex flex-col space-y-2'>
        <Heading variant='h4'>{t(Locales.PANEL_LANGUAGE_TITLE)}</Heading>
        <Language />
      </div>
      <div className='flex flex-col space-y-2'>
        <Heading variant='h4'>{t(Locales.PANEL_THEME_TITLE)}</Heading>
        <Theme />
      </div>
    </div>
  )
}

export default SettingsContainer
