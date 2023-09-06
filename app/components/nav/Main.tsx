import { Bars3BottomLeftIcon } from '@heroicons/react/24/solid'
import { HTMLProps } from 'react'

export const NavMain = ({ tabIndex, ...props }: HTMLProps<HTMLElement>) => {
  return (
    <nav {...props}>
      <Bars3BottomLeftIcon
        tabIndex={tabIndex}
        width={24}
        className='cursor-pointer text-gray-300'
      />
    </nav>
  )
}

export default NavMain
