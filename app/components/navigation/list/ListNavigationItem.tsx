'use client'

import Link, { LinkProps } from 'next/link'
import classNames from 'classnames'
import { usePathname } from 'next/navigation'
import { useCurrentLocale, useI18n } from '@/locales/client'
import { LocalesKeys } from '@/locales/locales'

export const Variant = {
  default: {
    default: '',
    active:
      'dark:text-cyan-50 font-bold hover:dark:text-cyan-50/75 hover:text-stone-500/75',
    classes:
      'dark:text-cyan-50 hover:dark:text-cyan-50/75 hover:text-stone-500/75'
  },
  secondary: {
    default: '',
    active:
      'text-secondary hover:text-secondary/75 dark:text-lime-400 dark:hover:text-lime-400/75 font-bold',
    classes:
      'text-secondary hover:text-secondary/75 dark:text-lime-400 hover:dark:text-lime-400/75'
  }
} as const

export type ListNavigationItemProps = LinkProps & {
  tabIndex?: number
  label: string
  variant?: keyof typeof Variant
}

export const ListNavigationItem = ({
  href,
  label,
  variant = 'default',
  ...props
}: ListNavigationItemProps) => {
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

export default ListNavigationItem
