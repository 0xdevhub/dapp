'use client'

import Link, { LinkProps } from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

export type NavListItemProps = LinkProps & {
  label: string
  customClass?: boolean
}

export const NavListItem = ({
  href,
  label,
  customClass,
  ...props
}: NavListItemProps) => {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      href={href}
      className={classNames([
        {
          'font-bold ': pathname === href
        },
        customClass ? 'drop-shadow-secondary text-secondary' : 'text-white'
      ])}
    >
      {label}
    </Link>
  )
}

export default NavListItem
