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

  return (
    <Link
      {...(props as LinkProps)}
      href={href}
      className={classNames(
        className,
        pathname === `/${currentLocale + href}`
          ? 'text-red-400'
          : 'text-yellow-300',
        'flex w-28 flex-col items-center p-4'
      )}
    >
      <span>{icon}</span>
      <span> {label}</span>
    </Link>
  )
}

export default AsideNavigationItem
