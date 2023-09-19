'use client'

import { type HTMLProps } from 'react'
import classNames from 'classnames'
import { Cog6ToothIcon } from '@heroicons/react/24/outline'

export type SettingsSelectorProps = HTMLProps<HTMLDivElement> & {
  isOpen?: boolean
}

export const SettingsSelector = ({
  isOpen,
  ...props
}: SettingsSelectorProps) => {
  return (
    <div
      {...props}
      className={classNames(props.className, 'cursor-pointer py-1.5')}
    >
      <Cog6ToothIcon
        width={18}
        className={classNames({
          'dark:text-gray-400': isOpen,
          'dark:text-white': !isOpen
        })}
      />
    </div>
  )
}

export default SettingsSelector
