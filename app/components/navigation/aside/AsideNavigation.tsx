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
    <Card {...props} className={classNames(className, 'flex rounded-xl')}>
      <aside className='rouded-l-xl flex-none overflow-hidden rounded-l-xl'>
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
      <div
        className={classNames(
          'flex-1 rounded-b-xl rounded-r-xl',
          'border-l-4 border-secondary bg-zinc-100 shadow-xl dark:border-lime-400 dark:bg-zinc-900/70'
        )}
      >
        {children}
      </div>
    </Card>
  )
}

export default AsideNavigation
