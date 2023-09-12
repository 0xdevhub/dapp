import type { HTMLProps } from 'react'
import { NavListItem, NavListItemProps } from './Item'

type NavListProps = HTMLProps<HTMLUListElement> & {
  navLinks: NavListItemProps[]
}

export const NavList = ({ navLinks, ...props }: NavListProps) => {
  return (
    <ul {...props}>
      {navLinks.map((navLink) => (
        <li>
          <NavListItem {...navLink} />
        </li>
      ))}
    </ul>
  )
}

export default NavList
