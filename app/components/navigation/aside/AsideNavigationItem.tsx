'use client'

import Link, { LinkProps } from 'next/link'
import classNames from 'classnames'
import { type HTMLProps, type ReactNode } from 'react'
import { useCurrentLocale } from '@/locales/client'
import { usePathname } from 'next/navigation'
import useCurrentPath from '@/app/lib/hooks/useCurrentPath'

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
        'flex flex-col items-center p-4',
        {
          'bg-secondary text-sky-100 dark:bg-lime-400 dark:text-lime-900':
            isCurrentPath,
          'hover:bg-zinc-200 dark:hover:bg-black/70': !isCurrentPath
        }
      )}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  )
}

export default AsideNavigationItem
