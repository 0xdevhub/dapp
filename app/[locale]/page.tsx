import { type Metadata } from 'next'
import appConfig from '@/app.config'
import Heading from '@/app/components/Heading'

export const metadata: Metadata = {
  title: `${appConfig.name} - início`,
  description: appConfig.meta.description
}

export default function Dashboard() {
  return (
    <section>
      <Heading variant='h2'>Meu Portfólio</Heading>
    </section>
  )
}
