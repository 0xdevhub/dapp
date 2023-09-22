import { Logo } from '@/app/components/logo'
import { SocialMedia } from '@/app/components/social/SocialMedia'

export const MaintenanceMode = () => {
  return (
    <main className='flex h-full flex-col items-center justify-between space-y-6 p-6 container'>
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
