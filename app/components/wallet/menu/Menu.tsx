'use client'

import classNames from 'classnames'
import { type HTMLProps, type ReactNode, useState } from 'react'
import Heading from '../../Heading'
import { DisconnectButton } from '../button/Disconnect'

export type MenuButtonProps = {
  onClick?: () => void
}
export type MenuProps =
  | HTMLProps<HTMLDivElement>
  | ({
      children: (props: MenuButtonProps) => ReactNode
    } & Pick<HTMLProps<HTMLDivElement>, 'className'>)

export const Menu = ({ children, ...props }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div {...props} className={classNames(props?.className, 'relative')}>
      {isOpen && (
        <div className='absolute -right-2 -top-2 z-[19] w-56 rounded-2xl bg-black/70 px-6 py-4 backdrop-blur-sm'>
          <section className='flex flex-col space-y-6'>
            <Heading variant='h4'>Minha carteira</Heading>
            <Heading variant='h5'>ID</Heading>
            <Heading variant='h5'>Rede</Heading>
            <Heading variant='h5'>Saldo</Heading>
            <DisconnectButton />
          </section>
        </div>
      )}
      <div className='relative z-20'>
        {typeof children === 'function'
          ? children({
              onClick
            })
          : children}
      </div>
    </div>
  )
}

export default Menu
