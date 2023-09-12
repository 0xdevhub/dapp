'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export type NavListItemProps = {
  label: string
  href: string
}

export const NavListItem = ({ href, label }: NavListItemProps) => {
  const pathname = usePathname()

  return (
    <Link
      href={href}
      key={href}
      className={classNames({
        'font-extrabold text-white': pathname === href
      })}
    >
      {label}
    </Link>
  )
}

export default NavListItem
