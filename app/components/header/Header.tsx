import dynamic from 'next/dynamic'
import { Logo } from '@/app/components/logo'
import { NavMain } from '@/app/components/nav'
import { HTMLProps } from 'react'
import classnames from 'classnames'
import appConfig from '@/app.config'

const WalletConnectButton = dynamic(
  () => import('@/app/components/wallet/buttons/Connect'),
  { ssr: false }
)

export const Header = ({ className, ...rest }: HTMLProps<HTMLDivElement>) => {
  return (
    <header
      className={classnames([
        className,
        'flex items-center justify-between space-x-4 lg:space-x-0'
      ])}
      {...rest}
    >
      <div className='flex flex-1 items-center justify-between space-x-8 lg:justify-start'>
        <Logo tabIndex={1} />
        <span className='hidden text-white/20 lg:inline-flex'>|</span>
        <NavMain tabIndex={2} navLinks={appConfig.routes} />
      </div>
      <div className='flex items-center space-x-4'>
        <WalletConnectButton />
      </div>
    </header>
  )
}

export default Header
