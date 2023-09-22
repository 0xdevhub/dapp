import { type HTMLProps } from 'react'
import dynamic from 'next/dynamic'
import appConfig from '@/app.config'
import { Separator } from '@/app/components/Separator'
import { Logo } from '@/app/components/logo'
import { NavMain } from '@/app/components/nav/Main'
import { Loading } from '@/app/components/Loading'
import { HeaderShadow } from './Shadow'

const Wallet = dynamic(() => import('@/app/components/wallet/Wallet'), {
  loading: () => <Loading className='w-12' variant='green' />,
  ssr: false
})

const Settings = dynamic(() => import('@/app/components/settings/Settings'), {
  loading: () => <Loading className='w-12' variant='green' />,
  ssr: false
})

export const Header = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <header {...props}>
      <div className='flex min-h-[4.5rem] items-center justify-between py-2 container lg:py-4'>
        <Logo tabIndex={1} />
        <div className='flex items-center space-x-4'>
          <NavMain tabIndex={2} navLinks={appConfig.routes} />
          <Separator className='hidden lg:inline-flex' />
          <Settings tabIndex={3} className='box-content' />
          <Separator className='hidden lg:inline-flex' />
          <Wallet
            tabIndex={appConfig.routes.length + 4}
            className='box-content'
          />
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
