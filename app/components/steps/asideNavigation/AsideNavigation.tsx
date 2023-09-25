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
      className={classNames(className, 'grid h-full grid-cols-12 rounded-2xl')}
    >
      <aside className='col-span-1'>
        <ul className='flex flex-col'>
          {Children.toArray(
            navLinks.map(({ href, icon, label }) => (
              <li className='max-w-[8rem] text-center'>
                <Link href={href} className='flex flex-col items-center p-4 '>
                  <span>{icon}</span>
                  <span className='text-base'>{label}</span>
                </Link>
              </li>
            ))
          )}
        </ul>
      </aside>
      <div className='col-span-11 rounded-2xl border-l-2 border-stone-400 dark:border-lime-400'>
        {children}
      </div>
    </Card>
  )
}

export default AsideNavigation
