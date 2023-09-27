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
        'flex cursor-pointer justify-center'
      )}
    >
      <Cog6ToothIcon
        width={20}
        className={classNames({
          'dark:text-cyan-50/75': isOpen,
          'dark:text-cyan-50': !isOpen
        })}
      />
    </div>
  )
}

export default SettingsSelector
