'use client'

import Link, { LinkProps } from 'next/link'
import classNames from 'classnames'
import { useI18n } from '@/locales/client'
import useCurrentPath from '@/app/lib/hooks/useCurrentPath'
import { Locale } from '@/locales/config'

export const Variant = {
  default: {
    default: '',
    active:
      'dark:text-cyan-50 hover:dark:text-cyan-50/75 hover:text-stone-500/75',
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

export type MainListItemProps = LinkProps & {
  label: string
  variant?: keyof typeof Variant
}

export const MainListItem = ({
  href,
  label,
  variant = 'default',
  ...props
}: MainListItemProps) => {
  const t = useI18n()
  const { isCurrentPath } = useCurrentPath(href as string)

  return (
    <Link
      {...props}
      href={href}
      className={classNames([
        [Variant[variant || 'default'].default],
        isCurrentPath
          ? [Variant[variant || 'default'].active]
          : Variant[variant || 'default'].classes
      ])}
    >
      {t(label as any, {})}
    </Link>
  )
}

export default MainListItem
