import { useQuery } from '@apollo/client'
import { IHubAppAddeds } from '../types'
import { HUB_APP_ADDEDS_QUERY } from '../queries'

export type UseGetAppsResponse = {
  hubAppAddeds: IHubAppAddeds[]
}

export function useGetApps() {
  const { loading, data } = useQuery<UseGetAppsResponse>(HUB_APP_ADDEDS_QUERY)

  return {
    apps: data?.hubAppAddeds || [],
    loading
  }
}

export default useGetApps
