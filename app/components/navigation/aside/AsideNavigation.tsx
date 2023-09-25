import { Children, type HTMLProps, type ReactNode } from 'react'
import Link from 'next/link'
import { Card } from '@/app/components/card/Card'
import classNames from 'classnames'

export type AsideNavigationNavLink = {
  id: string
  icon: ReactNode
  label: string
  href: string
}

export type AsideNavigationProps = HTMLProps<HTMLDivElement> & {
  navLinks: AsideNavigationNavLink[]
  children?: ReactNode
}

export const AsideNavigation = ({
  className,
  navLinks,
  children,
  ...props
}: AsideNavigationProps) => {
  return (
    <Card
      {...props}
      className={classNames(className, 'flex h-full w-full rounded-2xl')}
    >
      <aside className='flex-none'>
        <ul className='flex flex-col'>
          {Children.toArray(
            navLinks.map(({ href, icon, label }) => (
              <li className='text-center'>
                <Link
                  href={href}
                  className='flex w-28 flex-col items-center p-4'
                >
                  <span>{icon}</span>
                  <span>{label}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </aside>
      <div className='flex-1 rounded-2xl border-l-2 border-stone-400 bg-gray-50 dark:border-lime-400 dark:bg-stone-900/70'>
        {children}
      </div>
    </Card>
  )
}

export default AsideNavigation
