import { type Metadata } from 'next'
import appConfig from '@/app.config'
import Heading from '@/app/components/Heading'
import { getI18n } from '@/locales/server'

export const metadata: Metadata = {
  title: `${appConfig.name} - Aplicativos`,
  description: appConfig.meta.description
}

export default function Dashboard() {
  return (
    <section>
      <Heading variant='h2'>Meus Apps</Heading>
    </section>
  )
}
