import { type HTMLProps } from 'react'
import dynamic from 'next/dynamic'
import classnames from 'classnames'
import appConfig from '@/app.config'
import { Separator } from '@/app/components/Separator'
import { Logo } from '@/app/components/logo'
import { NavMain } from '@/app/components/nav/Main'
import { Loading } from '@/app/components/Loading'
import { HeaderShadow } from './Shadow'

const Wallet = dynamic(() => import('@/app/components/wallet/Wallet'), {
  ssr: false,
  loading: () => <Loading className='w-12' variant='green' />
})

const Settings = dynamic(() => import('@/app/components/settings/Settings'), {
  loading: () => <Loading className='w-12' variant='green' />
})

export const Header = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <header {...props}>
      <div className='flex min-h-[4.5rem] items-center justify-between space-x-4 py-2 container lg:py-4'>
        <Logo tabIndex={1} />
        <div className='flex items-center'>
          <NavMain tabIndex={2} navLinks={appConfig.routes} className='mr-4' />
          <Separator className='hidden lg:mr-2 lg:inline-flex' />
          <Settings tabIndex={3} className='mr-4 lg:mr-2' />
          <Separator className='hidden lg:mr-4 lg:inline-flex' />
          <Wallet tabIndex={appConfig.routes.length + 4} />
        </div>
      </div>
      <div className='relative h-12 overflow-hidden'>
        <div className='absolute left-0 right-0 z-0 h-full w-full opacity-40 dark:opacity-100'>
          <HeaderShadow />
        </div>
      </div>
    </header>
  )
}

export default Header
