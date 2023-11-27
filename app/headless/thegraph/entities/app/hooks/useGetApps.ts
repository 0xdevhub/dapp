import { useQuery } from '@apollo/client'
import { IHubAppAddeds } from '../types'
import { HUB_APP_ADDEDS_QUERY } from '../queries'

export type UseGetAppsResponse = {
  hubAppAddeds: IHubAppAddeds[]
}

type UseGetAppsProps = {
  chainId: number
}

export function useGetApps({ chainId }: UseGetAppsProps) {
  const { loading, data } = useQuery<UseGetAppsResponse>(HUB_APP_ADDEDS_QUERY, {
    context: {
      chainId
    }
  })

  return {
    apps: data?.hubAppAddeds || [],
    loading
  }
}

export default useGetApps
