import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { Heading } from '@/app/components/Heading'
import { Language } from '@/app/components/Language'

export const SettingsContainer = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={classNames(
        props.className,
        'flex flex-col justify-between space-y-4 p-6'
      )}
    >
      <div className='flex flex-col space-y-4'>
        <Heading variant='h4'>Idioma</Heading>
        <Language />
      </div>
    </div>
  )
}

export default SettingsContainer
