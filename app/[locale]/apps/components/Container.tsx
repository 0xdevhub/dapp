'use client'

import { useI18n } from '@/locales/client'
import { Heading } from '@/app/components/typography'
import { List } from './list'
import useGetApps from '@/app/headless/thegraph/entities/app/hooks/useGetApps'
import { Loading } from '@/app/components'
import { useNetwork } from '@/app/lib/wallet/hooks/useNetwork'

export const PageContainer = () => {
  const t = useI18n()
  const { config } = useNetwork()
  const { apps, loading } = useGetApps({
    chainId: config.id
  })

  return (
    <div>
      <section className='flex flex-col space-y-4'>
        <Heading as='h2'>{t('PAGES.APPS.TITLE')}</Heading>
        {loading ? <Loading /> : <List apps={apps} />}
      </section>
    </div>
  )
}

export default PageContainer
