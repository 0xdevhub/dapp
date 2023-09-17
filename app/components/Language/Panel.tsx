import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { Heading } from '@/app/components/Heading'
import { LanguageList } from './List'

export const LanguagePanel = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={classNames(
        props.className,
        'h-full p-6',

        'before:gradient-mask before:from-lime-400 before:to-sky-400',
        'before:bg-gradient-to-b lg:before:rounded-2xl lg:before:p-0.5'
      )}
    >
      <Heading variant='h4'>Idioma</Heading>
      <LanguageList />
    </div>
  )
}

export default LanguagePanel
