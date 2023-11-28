import { useQuery } from '@apollo/client'
import { IHubAppAddeds } from '../types'
import { HUB_APP_ADDEDS_QUERY } from '../queries'
import { useEffect } from 'react'

export type UseGetAppsResponse = {
  hubAppAddeds: IHubAppAddeds[]
}

type UseGetAppsProps = {
  chainId: number
}

export function useGetApps({ chainId }: UseGetAppsProps) {
  const { loading, data, refetch } = useQuery<UseGetAppsResponse>(
    HUB_APP_ADDEDS_QUERY,
    {
      context: {
        chainId
      }
    }
  )

  useEffect(() => {
    refetch()
  }, [chainId])

  return {
    apps: data?.hubAppAddeds || [],
    loading
  }
}

export default useGetApps
