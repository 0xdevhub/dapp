'use client'

import Link, { LinkProps } from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { useCurrentLocale, useI18n } from '@/locales/client'
import { LocalesKeys } from '@/locales/locales'

export const Variant = {
  default: {
    default: '',
    active: 'dark:text-white font-bold',
    classes: 'dark:text-white hover:dark:text-white/75'
  },
  primary: {
    default: '',
    active: 'dark:text-primary font-bold',
    classes: 'dark:text-primary hover:dark:text-primary/75'
  },
  secondary: {
    default: '',
    active: 'dark:text-secondary font-bold',
    classes: 'dark:text-secondary hover:dark:text-secondary/75'
  }
} as const

export type NavListItemProps = LinkProps & {
  tabIndex?: number
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
  const currentLocale = useCurrentLocale()
  const pathname = usePathname()
  return (
    <Link
      {...props}
      href={href}
      className={classNames([
        [Variant[variant || 'default'].default],
        pathname === `/${currentLocale + href}`
          ? [Variant[variant || 'default'].active]
          : Variant[variant || 'default'].classes
      ])}
    >
      {t(label as keyof LocalesKeys)}
    </Link>
  )
}

export default NavListItem
