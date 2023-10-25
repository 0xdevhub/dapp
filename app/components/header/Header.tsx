import { type HTMLProps } from 'react'
import dynamic from 'next/dynamic'
import appConfig from '@/app.config'
import classNames from 'classnames'
import { Separator, Logo, Loading, Navigation } from '@/app/components'

const Wallet = dynamic(() => import('@/app/components/wallet/Wallet'), {
  ssr: false,
  loading: () => <Loading className='w-8' />
})

const Settings = dynamic(() => import('@/app/components/settings/Settings'), {
  ssr: false,
  loading: () => <Loading className='w-8' />
})

export const Header = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <header {...props} className={classNames(className, 'container')}>
      <div
        className={classNames(
          'flex items-center justify-between rounded-xl py-4'
        )}
      >
        <Logo tabIndex={1} />
        <div className='flex items-center space-x-4'>
          <Navigation.MainNavigation tabIndex={2} navLinks={appConfig.routes} />
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
