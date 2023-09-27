import type { Metadata } from 'next'
import appConfig from '@/app.config'
import { AppsNewContainer } from './components/Container'

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${appConfig.name} - new`,
    description: appConfig.meta.description
  }
}

export default function AppsNewPage() {
  return <AppsNewContainer />
}
