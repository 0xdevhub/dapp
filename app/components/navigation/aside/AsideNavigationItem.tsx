'use client'

import Link, { LinkProps } from 'next/link'
import classNames from 'classnames'
import { type HTMLProps, type ReactNode } from 'react'
import { useCurrentLocale } from '@/locales/client'
import { usePathname } from 'next/navigation'

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
  const currentLocale = useCurrentLocale()
  const pathname = usePathname()
  const isCurrentPath = pathname === `/${currentLocale + href}`

  return (
    <Link
      {...(props as LinkProps)}
      href={href}
      className={classNames(
        className,
        'group',
        'flex flex-col items-center p-4'
      )}
      data-active={isCurrentPath}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </Link>
  )
}

export default AsideNavigationItem
