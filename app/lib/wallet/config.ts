import { createConfig, configureChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'

import { allowedChains, allowedChainsConfig } from '@/app/config/config'
import { publicProvider } from 'wagmi/providers/public'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  allowedChains,
  [
    publicProvider(),
    jsonRpcProvider({
      rpc: (chain) => {
        const chainConfig = allowedChainsConfig[chain.id].rpcUrls.protocol
        if (!chainConfig) throw new Error(`ChainId ${chain.id} not supported`)

        return {
          http: chainConfig.http[0],
          webSocket: chainConfig?.webSocket?.[0]
        }
      }
    })
  ]
)

const config = createConfig({
  autoConnect: true,
  connectors: [
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true
      }
    })
  ],
  publicClient,
  webSocketPublicClient
})

export { chains }

export default config
