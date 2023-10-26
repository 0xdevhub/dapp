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
      {...props}
      className={classNames(className, 'flex lg:rounded-md')}
      bgOpacity={0.4}
    >
      <aside className='-mr-1 flex-none'>
        <ul className='flex flex-col'>
          {Children.toArray(
            navLinks.map(({ href, icon, label }, index) => (
              <li
                className={classNames('text-center', {
                  'overflow-hidden lg:rounded-tl-md': index === 0
                })}
              >
                <AsideNavigationItem href={href} icon={icon} label={label} />
              </li>
            ))
          )}
        </ul>
      </aside>
      <div
        className={classNames(
          'flex-1 bg-white dark:bg-black/40',
          'border-l-4 border-secondary dark:border-lime-400 lg:rounded-md'
        )}
      >
        {children}
      </div>
    </Card>
  )
}

export default AsideNavigation
