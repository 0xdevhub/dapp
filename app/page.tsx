import { type Metadata } from 'next'
import appConfig from '@/app.config'
import Loading from '@/app/components/Loading'

export const metadata: Metadata = {
  title: `${appConfig.name} - início`,
  description: appConfig.meta.description
}

export default function Dashboard() {
  return (
    <section>
      <h2>Meu Portfólio</h2>
      <div className='flex min-h-[44rem] items-center justify-center'>
        <Loading className='w-24' />
      </div>
    </section>
  )
}
