import { useQuery } from '@apollo/client'
import { IHubAppAddeds } from '../types'
import { HUB_APP_ADDED_QUERY } from '../queries'

export type UseGetAppResponse = {
  hubAppAdded: IHubAppAddeds
}

type UseGetAppProps = {
  chainId: number
  id: string
}

export function useGetApp({ chainId, id }: UseGetAppProps) {
  const { loading, data } = useQuery<UseGetAppResponse>(HUB_APP_ADDED_QUERY, {
    context: {
      chainId
    },
    variables: {
      id
    }
  })

  return {
    app: data?.hubAppAdded,
    loading
  }
}

export default useGetApp
