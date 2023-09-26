import { type HTMLProps } from 'react'
import dynamic from 'next/dynamic'
import appConfig from '@/app.config'
import { Separator } from '@/app/components/Separator'
import { Logo } from '@/app/components/logo'
import { Menu } from './menu/Menu'
import { Loading } from '@/app/components/Loading'
import { HeaderShadow } from './Shadow'
import classNames from 'classnames'

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
    <header
      {...props}
      className={classNames(className, 'sticky top-0 z-10 container')}
    >
      <div
        className={classNames(
          'flex min-h-[4.5rem] items-center justify-between rounded-2xl'
        )}
      >
        <Logo tabIndex={1} />
        <div className='flex items-center space-x-4'>
          <Menu tabIndex={2} navLinks={appConfig.routes} />
          <Separator className='hidden lg:inline-flex' />
          <Settings tabIndex={3} className='box-content' />
          <Separator className='hidden lg:inline-flex' />
          <Wallet
            tabIndex={appConfig.routes.length + 4}
            className='box-content'
          />
        </div>
      </div>
      <div className='relative h-6 overflow-hidden'>
        <div className='absolute left-0 right-0 z-0 h-full w-full opacity-40 dark:opacity-100'>
          <HeaderShadow />
        </div>
      </div>
    </header>
  )
}

export default Header
