'use client'

import { type HTMLProps } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import { useCurrentLocale } from '@/locales/client'
import { Text } from '@/app/components/typography'

export type LanguageSelectorProps = HTMLProps<HTMLDivElement> & {
  isOpen?: boolean
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
        'flex cursor-pointer justify-between'
      )}
    >
      <Text as='span' className='capitalize'>
        {currentLocale}
      </Text>
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
