import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { Heading } from '@/app/components/Heading'
import { LanguageList } from './List'

export const LanguageContainer = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={classNames(
        props.className,
        'flex flex-col justify-between space-y-4 p-6',
        'before:from-lime-400 before:to-sky-400 before:gradient-mask',
        'before:bg-gradient-to-b lg:before:rounded-2xl lg:before:p-0.5'
      )}
    >
      <Heading variant='h4'>Idioma</Heading>
      <LanguageList />
    </div>
  )
}

export default LanguageContainer
