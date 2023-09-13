import { HTMLProps } from 'react'
import classnames from 'classnames'
import appConfig from '@/app.config'
import Separator from '@/app/components/Separator'
import { Logo } from '@/app/components/logo'
import { NavMain } from '@/app/components/nav'
import { Wallet } from '@/app/components/wallet'

export const Header = ({ className, ...rest }: HTMLProps<HTMLDivElement>) => {
  return (
    <header
      className={classnames([
        className,
        'flex items-center justify-between space-x-4 lg:space-x-0'
      ])}
      {...rest}
    >
      <div className='flex flex-1 items-center  justify-start  space-x-8'>
        <Logo tabIndex={1} />
        <Separator />
        <NavMain tabIndex={2} navLinks={appConfig.routes} />
      </div>
      <div className='flex items-center space-x-4'>
        <Wallet />
      </div>
    </header>
  )
}

export default Header
