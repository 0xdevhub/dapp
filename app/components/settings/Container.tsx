import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { Heading } from '@/app/components/Heading'
import { Language } from '@/app/components/Language'
import { Theme } from '@/app/components/theme'

export const SettingsContainer = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={classNames(
        props.className,
        'flex flex-col justify-between space-y-4 p-6'
      )}
    >
      <div className='flex flex-col space-y-2'>
        <Heading variant='h4'>Idioma</Heading>
        <Language />
      </div>
      <div className='flex flex-col space-y-2'>
        <Heading variant='h4'>Tema</Heading>
        <Theme />
      </div>
    </div>
  )
}

export default SettingsContainer
