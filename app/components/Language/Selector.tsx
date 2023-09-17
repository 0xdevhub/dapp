'use client'

import { type HTMLProps } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import { useCurrentLocale } from '@/locales/client'

export type LanguageSelectorProps = HTMLProps<HTMLDivElement> & {
  isOpen?: boolean
  onClick?: () => void
}

export const LanguageSelector = ({
  isOpen,
  ...props
}: LanguageSelectorProps) => {
  const currentLocale = useCurrentLocale()

  return (
    <div {...props}>
      <div className='flex cursor-pointer items-center space-x-2 p-3'>
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
  )
}

export default LanguageSelector
