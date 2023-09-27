import { Children, type HTMLProps, type ReactNode } from 'react'
import { Card } from '@/app/components/card/Card'

import classNames from 'classnames'

import {
  AsideNavigationItem,
  AsideNavigationItemProps
} from './AsideNavigationItem'
import useCurrentPath from '@/app/lib/hooks/useCurrentPath'

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
  const { isCurrentPath: isFirstLinkActive } = useCurrentPath(navLinks[0].href)

  return (
    <Card
      {...props}
      className={classNames(className, 'flex overflow-hidden rounded-2xl')}
    >
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
      <div
        className={classNames(
          'flex-1 rounded-b-2xl border-l-4 border-secondary bg-zinc-50 shadow dark:border-lime-400 dark:bg-black/70'
        )}
      >
        {children}
      </div>
    </Card>
  )
}

export default AsideNavigation
