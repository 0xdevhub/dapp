'use client'

import { type ReactNode } from 'react'
import { Loading } from '@/app/components'
import useGetApp from '@/app/headless/thegraph/entities/app/hooks/useGetApp'
import { useNetwork } from '@/app/lib/wallet/hooks'
import { Heading } from '@/app/components/typography/Heading'

export type AppLayoutProps = {
  children: ReactNode
  params: { id: string }
}

export default function AppLayout({ children, params }: AppLayoutProps) {
  const { config } = useNetwork()

  const { app, loading } = useGetApp({
    chainId: config.id,
    id: params.id
  })

  return loading ? (
    <Loading />
  ) : (
    <section className='flex h-full flex-col space-y-24'>
      <div className='flex flex-col space-y-4'>
        <Heading as='h2'>{app?.name_} demo</Heading>
        <Heading as='h3'>{app?.description_}</Heading>
      </div>
      <article className='h-full'>{children}</article>
    </section>
  )
}
