import { type HTMLProps } from 'react'
import dynamic from 'next/dynamic'
import classnames from 'classnames'
import appConfig from '@/app.config'
import { Separator } from '@/app/components/Separator'
import { Logo } from '@/app/components/logo'
import { NavMain } from '@/app/components/nav/Main'
import { Loading } from '@/app/components/Loading'
import { HeaderShadow } from './Shadow'
import { Settings } from '@/app/components/settings/Settings'

const Wallet = dynamic(() => import('@/app/components/wallet/Wallet'), {
  ssr: false,
  loading: () => <Loading className='w-24' variant='green' />
})

export const Header = (props: HTMLProps<HTMLDivElement>) => {
  return (
    <>
      <header
        {...props}
        className={classnames([
          props.className,
          'flex items-center justify-between space-x-4'
        ])}
      >
        <Logo tabIndex={1} />
        <div className='flex items-center space-x-4'>
          <NavMain tabIndex={2} navLinks={appConfig.routes} />
          <Separator className='hidden lg:inline-flex' />
          <Settings />
          {/* <Separator className='hidden lg:inline-flex' />
          <Language
            tabIndex={appConfig.routes.length + 2}
            className='hidden lg:inline-flex'
          /> */}
          <Separator className='hidden lg:inline-flex' />
          <Wallet tabIndex={appConfig.routes.length + 3} />
        </div>
      </header>
      <div className='absolute left-0 right-0 h-11 w-full overflow-hidden'>
        <HeaderShadow />
      </div>
    </>
  )
}

export default Header
