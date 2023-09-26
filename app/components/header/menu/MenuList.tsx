import { Children, type HTMLProps } from 'react'
import { MenuListItem, MenuListItemProps } from './MenuListItem'

type MenuListProps = HTMLProps<HTMLUListElement> & {
  navLinks: MenuListItemProps[]
  onItemClick?: () => void
}

export const MenuList = ({
  navLinks,
  onItemClick,
  tabIndex = 0,
  ...props
}: MenuListProps) => {
  return (
    <ul {...props}>
      {Children.toArray(
        navLinks.map((navLink, index) => (
          <li>
            <MenuListItem
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

export default MenuList
