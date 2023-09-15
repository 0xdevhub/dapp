'use client'

import Link, { LinkProps } from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { useI18n } from '@/locales/client'
import { Locales } from '@/locales/locales'

export const Variant = {
  default: {
    default: '',
    active: 'text-white font-bold',
    classes: 'text-white'
  },
  primary: {
    default: '',
    active: 'text-primary font-bold',
    classes: 'text-primary'
  },
  secondary: {
    default: '',
    active: 'text-secondary font-bold',
    classes: 'text-secondary'
  }
} as const

export type NavListItemProps = LinkProps & {
  label: string
  variant?: keyof typeof Variant
}

export const NavListItem = ({
  href,
  label,
  variant = 'default',
  ...props
}: NavListItemProps) => {
  const t = useI18n()

  const pathname = usePathname()

  return (
    <Link
      {...props}
      href={href}
      className={classNames([
        [Variant[variant || 'default'].default],
        pathname === href
          ? [Variant[variant || 'default'].active]
          : Variant[variant || 'default'].classes
      ])}
    >
      {t(label as Locales)}
    </Link>
  )
}

export default NavListItem
