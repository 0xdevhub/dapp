import { type HTMLProps } from 'react'
import dynamic from 'next/dynamic'
import classnames from 'classnames'
import appConfig from '@/app.config'
import { Separator } from '@/app/components/Separator'
import { Logo } from '@/app/components/logo'
import { NavMain } from '@/app/components/nav'
import { Loading } from '@/app/components/Loading'
import { LanguageSelector } from '@/app/components/LanguageSelector'
import HeaderShadow from './Shadow'

const Wallet = dynamic(() => import('@/app/components/wallet/Wallet'), {
  ssr: false,
  loading: () => <Loading className='w-24' variant='green' />
})

export const Header = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <>
      <header
        {...props}
        className={classnames([
          className,
          'min-h-[4.5rem]',
          'flex items-center justify-between space-x-4 lg:space-x-0'
        ])}
      >
        <div className='flex flex-1 items-center  justify-start space-x-4 lg:space-x-8'>
          <Logo tabIndex={1} />
          <Separator />
          <NavMain tabIndex={2} navLinks={appConfig.routes} />
        </div>
        <div className='flex items-center space-x-4'>
          <LanguageSelector tabIndex={appConfig.routes.length + 2} />
          <Separator className='hidden lg:inline-flex' />
          <Wallet
            connectButtonProps={{
              tabIndex: appConfig.routes.length + 3
            }}
            avatarProps={{
              tabIndex: appConfig.routes.length + 4
            }}
          />
        </div>
      </header>
      <div className='absolute left-0 right-0 h-11 w-full overflow-hidden'>
        <HeaderShadow />
      </div>
    </>
  )
}

export default Header
