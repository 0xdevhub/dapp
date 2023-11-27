import { Children, HTMLProps } from 'react'
import ListItem from './ListItem'
import { IHubAppAddeds } from '@/app/headless/thegraph/entities/app/types'

export type ListProps = HTMLProps<HTMLUListElement> & {
  apps: IHubAppAddeds[]
}

export const List = ({ apps, ...props }: ListProps) => {
  return (
    <ul className='grid grid-cols-4 gap-6' {...props}>
      {Children.toArray(
        apps.map((app) => (
          <li className='col-span-4 sm:col-span-2 lg:col-span-1'>
            <ListItem app={app} />
          </li>
        ))
      )}
    </ul>
  )
}

export default List
