import { type HTMLProps } from 'react'
import dynamic from 'next/dynamic'
import classnames from 'classnames'
import appConfig from '@/app.config'
import { Separator } from '@/app/components/Separator'
import { Logo } from '@/app/components/logo'
import { NavMain } from '@/app/components/nav'
import { Loading } from '@/app/components/Loading'
import { LanguageSelector } from '@/app/components/LanguageSelector'

const Wallet = dynamic(() => import('@/app/components/wallet/Wallet'), {
  ssr: false,
  loading: () => <Loading className='w-24' />
})

export const Header = ({ className, ...props }: HTMLProps<HTMLDivElement>) => {
  return (
    <header
      {...props}
      className={classnames([
        className,
        'flex min-h-[4.5rem] items-center justify-between space-x-4 lg:space-x-0'
      ])}
    >
      <div className='flex flex-1 items-center  justify-start space-x-4 lg:space-x-8'>
        <Logo tabIndex={1} />
        <Separator />
        <NavMain tabIndex={2} navLinks={appConfig.routes} />
      </div>
      <div className='flex items-center space-x-4'>
        <LanguageSelector />
        <Separator className='hidden lg:inline-flex' />
        <Wallet />
      </div>
    </header>
  )
}

export default Header
