import { Language } from '@/app/components/language'
import { Logo } from '@/app/components/logo'
import SocialMedia from '@/app/components/social/SocialMedia'
import { Theme } from '@/app/components/theme'

export const MaintenanceMode = () => {
  return (
    <main className='flex h-full flex-col items-center justify-between space-y-6 p-6 container'>
      <div className='absolute flex space-x-6'>
        <Language useClickOutside squareRootClassName='w-24' />
        <Theme useClickOutside squareRootClassName='w-24' />
      </div>
      <div className='flex h-full flex-1 items-center justify-center'>
        <Logo />
      </div>
      <div>
        <SocialMedia className='text-black/30' />
      </div>
    </main>
  )
}

export default MaintenanceMode
