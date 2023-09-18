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
    <div
      {...props}
      className={classNames(
        props.className,
        'flex cursor-pointer justify-between space-x-2 py-1'
      )}
    >
      <span className='text-sm font-bold text-white'>{currentLocale}</span>
      <ChevronDownIcon
        width={18}
        className={classNames('transform', {
          'rotate-180': isOpen,
          'rotate-0': !isOpen
        })}
      />
    </div>
  )
}

export default LanguageSelector
