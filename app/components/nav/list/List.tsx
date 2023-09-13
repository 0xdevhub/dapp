import { Children, type HTMLProps } from 'react'
import { NavListItem, NavListItemProps } from './Item'

type NavListProps = HTMLProps<HTMLUListElement> & {
  navLinks: NavListItemProps[]
  onItemClick?: () => void
}

export const NavList = ({ navLinks, onItemClick, ...props }: NavListProps) => {
  return (
    <ul {...props}>
      {Children.toArray(
        navLinks.map((navLink) => (
          <li>
            <NavListItem {...navLink} onClick={onItemClick} />
          </li>
        ))
      )}
    </ul>
  )
}

export default NavList
