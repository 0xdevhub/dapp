import { Children } from 'react'
import ListItem from './ListItem'

export const List = () => {
  const pins = Array.from({ length: 1 }).fill('')

  return (
    <ul className='grid grid-cols-4 gap-6'>
      {Children.map(pins, () => (
        <li className='col-span-4 sm:col-span-2 lg:col-span-1'>
          <ListItem />
        </li>
      ))}
    </ul>
  )
}

export default List
