import { Bars3Icon } from '@heroicons/react/24/solid'
import { HTMLProps } from 'react'

export const NavMain = ({ tabIndex, ...props }: HTMLProps<HTMLElement>) => {
  return (
    <nav {...props}>
      <Bars3Icon tabIndex={tabIndex} width={24} className='cursor-pointer' />
    </nav>
  )
}

export default NavMain
