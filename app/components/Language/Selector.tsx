import { type HTMLProps } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames'

export const LanguageSelector = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={classNames(
        props.className,
        'flex cursor-pointer items-center justify-center space-x-px'
      )}
    >
      <ChevronDownIcon width={22} />
      <span className='font-bold'>pt</span>
    </div>
  )
}

export default LanguageSelector
