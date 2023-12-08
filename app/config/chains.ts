import { avalancheFuji, polygonMumbai } from 'wagmi/chains'
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
      address: '0x7953C478A5F5d53C263Bd1251BfC4c418d8C5568',
      blockCreated: 0
    },
    hub: {
      address: '0xE69cEa099bde1f729a13C4D9eD41E0E6C5b8873b',
      blockCreated: 0
    },
    ccipCrossChainBridge: {
      address: '0xC6E1156D6047E7980e3c581d5c16c979b8406467',
      blockCreated: 0
    }
  }
})

export const polygonMumbaiChain: Chain = merge(polygonMumbai, {
  blockExplorers: {
    thegraph: {
      name: 'crosschain-nft-ccip-v2',
      url: process.env.NEXT_PUBLIC_NETWORK_80001_SUBGRAPH!
    }
  },
  rpcUrls: {
    protocol: {
      http: [process.env.NEXT_PUBLIC_NETWORK_80001_HTTP_RPC!],
      websocket: [process.env.NEXT_PUBLIC_NETWORK_80001_WS_RPC!]
    }
  },
  contracts: {
    accessManagement: {
      address: '0xBbd6d4dC3BF45fdbc286a01916eb7611b727957c',
      blockCreated: 0
    },
    hub: {
      address: '0xE69cEa099bde1f729a13C4D9eD41E0E6C5b8873b',
      blockCreated: 0
    },
    ccipCrossChainBridge: {
      address: '0xC6E1156D6047E7980e3c581d5c16c979b8406467',
      blockCreated: 0
    }
  }
})
