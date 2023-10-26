import { Logo, Social } from '@/app/components'

export const MaintenanceMode = () => {
  return (
    <main className='flex h-full flex-col items-center justify-between space-y-6 p-6 container'>
      <div className='flex h-full flex-1 items-center justify-center'>
        <Logo />
      </div>
      <div>
        <Social className='text-black/40' />
      </div>
    </main>
  )
}

export default MaintenanceMode
