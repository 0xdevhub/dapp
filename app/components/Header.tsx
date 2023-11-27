import { type HTMLProps } from 'react'
import dynamic from 'next/dynamic'
import classNames from 'classnames'
import { Separator, Logo, Loading } from '@/app/components'
import { MainNav } from '@/app/components/navigation/main/Main'

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
    <header
      {...props}
      className={classNames(className, 'bg-black/20 container')}
    >
      <div
        className={classNames(
          'flex items-center justify-between rounded-xl py-2'
        )}
      >
        <Logo />
        <div className='flex items-center space-x-4'>
          <MainNav
            navLinks={[
              {
                label: 'PAGES.APPS.TITLE',
                href: '/apps/',
                variant: 'secondary'
              }
            ]}
          />
          <Separator className='hidden lg:inline-flex' />
          <Settings className='box-content' />
          <Separator className='hidden lg:inline-flex' />
          <Wallet className='box-content' />
        </div>
      </div>
    </header>
  )
}

export default Header
