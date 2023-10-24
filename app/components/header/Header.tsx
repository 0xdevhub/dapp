import { type HTMLProps } from 'react'
import dynamic from 'next/dynamic'
import appConfig from '@/app.config'
import classNames from 'classnames'
import { Separator, Logo, Loading } from '@/app/components'
import { Menu } from './menu/Menu'

const Wallet = dynamic(() => import('@/app/components/wallet/Wallet'), {
  ssr: false,
  loading: () => <Loading className='w-12' />
})

const Settings = dynamic(() => import('@/app/components/settings/Settings'), {
  ssr: false,
  loading: () => <Loading className='w-12' />
})

export const Header = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <header {...props} className={classNames(className, 'container')}>
      <div
        className={classNames(
          'flex items-center justify-between rounded-xl py-4'
        )}
      >
        <Logo.Container tabIndex={1} />
        <div className='flex items-center space-x-4'>
          <Menu tabIndex={2} navLinks={appConfig.routes} />
          <Separator className='hidden lg:inline-flex' />
          <Settings
            tabIndex={appConfig.routes.length + 2}
            className='box-content'
          />
          <Separator className='hidden lg:inline-flex' />
          <Wallet
            tabIndex={appConfig.routes.length + 3}
            className='box-content'
          />
        </div>
      </div>
    </header>
  )
}

export default Header
