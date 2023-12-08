import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'

import { RetryLink } from '@apollo/client/link/retry'
import { HttpLink } from '@apollo/client'
import { allowedChains, allowedChainsConfig } from '@/app/config/config'
import { reduce } from 'lodash'
import { Chain } from '@/app/config/types'

// Default client based on environment variable
const defaultClient: keyof typeof clients =
  +process.env.NEXT_PUBLIC_NETWORK_DEFAULT_ID!

const clients = reduce(
  allowedChains,
  (acc, chain: Chain) => {
    const API_URL = allowedChainsConfig[chain.id].blockExplorers.thegraph.url
    acc[chain.id] = new HttpLink({ uri: API_URL })
    return acc
  },
  {} as Record<keyof typeof allowedChainsConfig, HttpLink>
)

const httpLink = new ApolloLink((operation, forward) => {
  const chainId = operation.getContext().chainId || +defaultClient
  return clients[chainId].request(operation, forward)
})

const retryLink = new RetryLink({
  delay: {
    initial: 1000,
    max: Infinity,
    jitter: true
  },
  attempts: {
    max: 20,
    retryIf: (error) => !!error
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
