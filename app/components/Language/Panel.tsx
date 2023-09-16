import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { Heading } from '@/app/components/Heading'
import { LanguageList } from './List'

export const LanguagePanel = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div {...props} className={classNames(props.className, 'h-full p-6')}>
      <Heading variant='h4'>Idioma</Heading>
      <LanguageList />
    </div>
  )
}

export default LanguagePanel
