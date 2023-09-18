import { Children, type HTMLProps } from 'react'
import { NavListItem, NavListItemProps } from './Item'

type NavListProps = HTMLProps<HTMLUListElement> & {
  navLinks: NavListItemProps[]
  onItemClick?: () => void
}

export const NavList = ({
  navLinks,
  onItemClick,
  tabIndex = 0,
  ...props
}: NavListProps) => {
  return (
    <ul {...props}>
      {Children.toArray(
        navLinks.map((navLink, index) => (
          <li>
            <NavListItem
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

export default NavList
