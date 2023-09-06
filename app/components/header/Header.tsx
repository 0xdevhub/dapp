import dynamic from 'next/dynamic'
import { Logo } from '@/app/components/logo'
import { NavMain } from '@/app/components/nav'
import { HTMLProps } from 'react'
import classnames from 'classnames'

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
      <div className='flex flex-1 items-center justify-between space-x-4 lg:justify-start'>
        <Logo tabIndex={1} />
        <span className='hidden text-gray-400 lg:inline-flex'>|</span>
        <NavMain tabIndex={2} />
      </div>
      <div className='flex items-center space-x-4'>
        <WalletConnectButton />
      </div>
    </header>
  )
}

export default Header
