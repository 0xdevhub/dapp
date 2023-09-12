'use client'

import Link, { LinkProps } from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'

export const Variant = {
  default: {
    active: 'font-bold',
    default: 'text-white'
  },
  secondary: {
    active: 'font-bold drop-shadow-secondary',
    default: 'text-secondary'
  }
} as const

export type NavListItemProps = LinkProps & {
  label: string
  customClass?: boolean
  variant?: keyof typeof Variant
}

export const NavListItem = ({
  href,
  label,
  variant = 'default',
  ...props
}: NavListItemProps) => {
  const pathname = usePathname()

  return (
    <Link
      {...props}
      href={href}
      className={classNames([
        {
          [Variant[variant || 'default'].active]: pathname === href
        },
        Variant[variant || 'default'].default
      ])}
    >
      {label}
    </Link>
  )
}

export default NavListItem
