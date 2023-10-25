import { Children, type HTMLProps } from 'react'
import { MainListItem, MainListItemProps } from './MainListItem'

type MainListProps = HTMLProps<HTMLUListElement> & {
  navLinks: MainListItemProps[]
  onItemClick?: () => void
}

export const MainList = ({
  navLinks,
  onItemClick,
  tabIndex = 0,
  ...props
}: MainListProps) => {
  return (
    <ul {...props}>
      {Children.toArray(
        navLinks.map((navLink, index) => (
          <li>
            <MainListItem
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

export default MainList
