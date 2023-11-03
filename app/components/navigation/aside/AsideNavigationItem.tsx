'use client'

import Link, { LinkProps } from 'next/link'
import classNames from 'classnames'
import { type HTMLProps, type ReactNode } from 'react'
import useCurrentPath from '@/app/lib/hooks/useCurrentPath'
import { Text } from '@/app/components/typography'

export type AsideNavigationItemProps = HTMLProps<HTMLAnchorElement> &
  LinkProps & {
    icon: ReactNode
    label: string
  }

export const AsideNavigationItem = ({
  icon,
  label,
  href,
  className,
  ...props
}: AsideNavigationItemProps) => {
  const { isCurrentPath } = useCurrentPath(href)

  return (
    <Link
      {...(props as LinkProps)}
      href={href}
      className={classNames(
        className,
        'group',
        'flex flex-col items-center p-2 lg:p-4',
        {
          'bg-secondary text-sky-100 hover:opacity-90 dark:bg-lime-400 dark:text-lime-900':
            isCurrentPath,
          'hover:bg-stone-200 dark:hover:bg-black/70': !isCurrentPath
        }
      )}
    >
      {icon}
      <Text size='md' className='hidden lg:block'>
        {label}
      </Text>
    </Link>
  )
}

export default AsideNavigationItem
