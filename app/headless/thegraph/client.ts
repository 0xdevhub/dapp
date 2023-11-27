import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { RetryLink } from '@apollo/client/link/retry'
import { HttpLink } from '@apollo/client'
import { getChainSubgraphById } from '@/app/lib/utils/network'

const API_URL = getChainSubgraphById(
  +process.env.NEXT_PUBLIC_NETWORK_DEFAULT_ID!
)

const httpLink = new HttpLink({
  uri: API_URL
})

const retryLink = new RetryLink({
  delay: {
    initial: 1000,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: 20,
    retryIf: (error, op) => {
      console.log('retry error', error, op)
      return !!error
    }
  }
})

const link = ApolloLink.from([retryLink, httpLink])

const cache = new InMemoryCache()

export const client = new ApolloClient({
  link,
  cache
})

type Client = typeof client

export type { Client }

export default client
