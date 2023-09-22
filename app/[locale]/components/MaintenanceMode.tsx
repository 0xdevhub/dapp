import { Logo } from '@/app/components/logo'
import SocialMedia from '@/app/components/social/SocialMedia'

export const MaintenanceMode = () => {
  return (
    <main className='flex h-full items-center justify-center'>
      <div>
        <Logo />
        <div>
          <SocialMedia className='text-black/30' />
        </div>
      </div>
    </main>
  )
}

export default MaintenanceMode
