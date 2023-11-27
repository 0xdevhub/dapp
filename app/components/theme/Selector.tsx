'use client'

import { type HTMLProps } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import classNames from 'classnames'
import { useDarkMode } from 'usehooks-ts'
import { useI18n } from '@/locales/client'
import { Text } from '@/app/components/typography'

export type ThemeSelectorProps = HTMLProps<HTMLDivElement> & {
  isOpen?: boolean
}

export const ThemeSelector = ({ isOpen, ...props }: ThemeSelectorProps) => {
  const { isDarkMode } = useDarkMode()
  const t = useI18n()

  return (
    <div
      {...props}
      className={classNames(
        props.className,
        'flex cursor-pointer justify-between'
      )}
    >
      <Text as='span'>{isDarkMode ? t('THEME.DARK') : t('THEME.LIGHT')}</Text>
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

export default ThemeSelector
