import type { Metadata } from 'next'
import appConfig from '@/app.config'

export const metadata: Metadata = {
  title: `${appConfig.name} - aplicativos`,
  description: appConfig.meta.description
}

export default function Dashboard() {
  return (
    <section>
      <h1>Aplicativos</h1>
    </section>
  )
}
