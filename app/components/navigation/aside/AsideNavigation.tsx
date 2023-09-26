import { Children, type HTMLProps, type ReactNode } from 'react'
import { Card } from '@/app/components/card/Card'
import classNames from 'classnames'
import {
  AsideNavigationItem,
  AsideNavigationItemProps
} from './AsideNavigationItem'

export type AsideNavigationProps = HTMLProps<HTMLDivElement> & {
  navLinks: AsideNavigationItemProps[]
  children?: ReactNode
}

export const AsideNavigation = ({
  className,
  navLinks,
  children,
  ...props
}: AsideNavigationProps) => {
  return (
    <Card {...props} className={classNames(className, 'flex rounded-2xl')}>
      <aside className='flex-none'>
        <ul className='flex flex-col'>
          {Children.toArray(
            navLinks.map(({ href, icon, label }) => (
              <li className='text-center'>
                <AsideNavigationItem href={href} icon={icon} label={label} />
              </li>
            ))
          )}
        </ul>
      </aside>
      <div className='flex-1 rounded-2xl border-l-4 border-secondary bg-zinc-50 shadow dark:border-lime-400 dark:bg-black/70'>
        {children}
      </div>
    </Card>
  )
}

export default AsideNavigation
