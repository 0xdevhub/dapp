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
    <Card
      as='section'
      {...props}
      className={classNames(className, 'flex')}
      bgOpacity={0.4}
    >
      <aside className='flex-none overflow-hidden'>
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
          'flex-1 bg-stone-200 dark:bg-black/40',
          'border-l-4 border-secondary dark:border-lime-400 '
        )}
      >
        {children}
      </div>
    </Card>
  )
}

export default AsideNavigation
