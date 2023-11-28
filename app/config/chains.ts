import { avalancheFuji, optimismGoerli } from 'wagmi/chains'
import { merge } from 'lodash'
import { Chain } from './types'

export const avalancheFujiChain: Chain = merge(avalancheFuji, {
  blockExplorers: {
    thegraph: {
      name: 'crosschain-nft-ccip-v2',
      url: process.env.NEXT_PUBLIC_NETWORK_43113_SUBGRAPH!
    }
  },
  rpcUrls: {
    protocol: {
      http: [process.env.NEXT_PUBLIC_NETWORK_43113_HTTP_RPC!],
      websocket: [process.env.NEXT_PUBLIC_NETWORK_43113_WS_RPC!]
    }
  },
  contracts: {
    accessManagement: {
      address: '0x96445b0c40a03a988C72bBb6537358779F4659bC',
      blockCreated: 0
    },
    hub: {
      address: '0xd3975F5c825DDb608d32DDdF89d072c524470414',
      blockCreated: 0
    }
  }
})

export const optimismGoerliChain: Chain = merge(optimismGoerli, {
  blockExplorers: {
    thegraph: {
      name: 'crosschain-nft-ccip-v2-optimis',
      url: process.env.NEXT_PUBLIC_NETWORK_420_SUBGRAPH!
    }
  },
  rpcUrls: {
    protocol: {
      http: [process.env.NEXT_PUBLIC_NETWORK_420_HTTP_RPC!],
      websocket: [process.env.NEXT_PUBLIC_NETWORK_420_WS_RPC!]
    }
  },
  contracts: {
    accessManagement: {
      address: '0x0077124A6913476D37405E46fb41F1AA7ce255D7',
      blockCreated: 0
    },
    hub: {
      address: '0x747bC054Da9C824eC9f10D5DCEe0D8FA3BecDc38',
      blockCreated: 0
    }
  }
})
