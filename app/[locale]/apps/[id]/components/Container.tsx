'use client'

import { useI18n } from '@/locales/client'
import { Heading } from '@/app/components/typography'
import useGetApp from '@/app/headless/thegraph/entities/app/hooks/useGetApp'
import { useNetwork } from '@/app/lib/wallet/hooks'
import { Loading } from '@/app/components'

export type PageContainerProps = {
  params: {
    id: string
  }
}

export const PageContainer = ({ params }: PageContainerProps) => {
  const t = useI18n()
  const { config } = useNetwork()

  const { app, loading } = useGetApp({
    chainId: config.id,
    id: params.id
  })

  return loading ? (
    <Loading />
  ) : (
    <div>
      <div className='flex flex-col space-y-4'>
        <Heading as='h2'>{app?.name_} demo</Heading>
        <Heading as='h3'>{app?.description_}</Heading>
      </div>
    </div>
  )
}

export default PageContainer
