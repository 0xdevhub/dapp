import { createConfig, configureChains } from 'wagmi'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { polygonMumbai, polygon } from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [polygonMumbai, polygon],
  [
    alchemyProvider({
      apiKey: 'q6A2S1PCqjST0yu0-Txzd_oKUcsXz9em'
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
