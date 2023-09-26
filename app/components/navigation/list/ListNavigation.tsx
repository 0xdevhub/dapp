import { Children, type HTMLProps } from 'react'
import {
  ListNavigationItem,
  ListNavigationItemProps
} from './ListNavigationItem'

type ListNavigationProps = HTMLProps<HTMLUListElement> & {
  navLinks: ListNavigationItemProps[]
  onItemClick?: () => void
}

export const ListNavigation = ({
  navLinks,
  onItemClick,
  tabIndex = 0,
  ...props
}: ListNavigationProps) => {
  return (
    <ul {...props}>
      {Children.toArray(
        navLinks.map((navLink, index) => (
          <li>
            <ListNavigationItem
              {...navLink}
              onClick={onItemClick}
              tabIndex={tabIndex + index}
            />
          </li>
        ))
      )}
    </ul>
  )
}

export default ListNavigation
