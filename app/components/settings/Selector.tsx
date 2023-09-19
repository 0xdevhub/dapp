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
      className={classNames(
        props.className,
        'flex h-7 w-7 cursor-pointer justify-center'
      )}
    >
      <Cog6ToothIcon
        width={18}
        className={classNames({
          'dark:text-stone-200': isOpen,
          'dark:text-white': !isOpen
        })}
      />
    </div>
  )
}

export default SettingsSelector
