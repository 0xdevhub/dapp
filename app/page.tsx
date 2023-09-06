import type { Metadata } from 'next'
import appConfig from '@/app.config'

export const metadata: Metadata = {
  title: `${appConfig.name} - home`,
  description: appConfig.meta.description
}

export default function Dashboard() {
  return (
    <section>
      <h1>Welcome</h1>
    </section>
  )
}
