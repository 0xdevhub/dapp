import { ApolloClient, InMemoryCache, ApolloLink } from '@apollo/client'
import { RetryLink } from '@apollo/client/link/retry'
import { HttpLink } from '@apollo/client'
import { allowedChainsConfig } from '@/app/config/config'

///todo

// const defaultClient: keyof typeof clients = "heroku";

// const clients = {
//   "heroku": new HttpLink({ uri: "https://endpointURLForHeroku" }),
//   "lists": new HttpLink({uri: "https://endpointURLForLists" })
// }

// const isRequestedClient = (clientName: string) => (op: Operation) =>
//   op.getContext().clientName === clientName;

// const ClientResolverLink = Object.entries(clients)
//   .map(([clientName, Link]) => ([clientName, ApolloLink.from([Link])] as const))
//   .reduce(([_, PreviousLink], [clientName, NextLink]) => {

//     const ChainedLink = ApolloLink.split(
//       isRequestedClient(clientName),
//       NextLink,
//       PreviousLink
//     )

//     return [clientName, ChainedLink];
//   }, ["_default", clients[defaultClient]])[1]

// declare module "@apollo/client" {
//   interface DefaultContext {
//     clientName: keyof typeof clients
//   }
// }

const API_URL = allowedChainsConfig[43_113].blockExplorers.thegraph.url

console.log(API_URL, allowedChainsConfig)

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
