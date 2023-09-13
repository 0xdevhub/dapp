import { type Metadata } from 'next'
import appConfig from '@/app.config'
// import Loading from '@/app/components/Loading'

export const metadata: Metadata = {
  title: `${appConfig.name} - início`,
  description: appConfig.meta.description
}

export default function Dashboard() {
  return (
    <section>
      <h2>Meu Portfólio</h2>
      {/*
      <div className='flex min-h-[44rem] flex-col items-center justify-center space-y-2'>
         <Loading className='w-24' />
        <Loading className='w-24' variant='primary' />
        <Loading className='w-24' variant='secondary' />
        <Loading className='w-24' variant='dark' />
        <Loading className='w-24' variant='green' /> 
      </div>
      */}
    </section>
  )
}
