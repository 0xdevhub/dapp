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
      address: '0x091BEbE42637D6c283f88ceF478Cab8581293f73',
      blockCreated: 0
    },
    hub: {
      address: '0xA5fBbb4B142A8062b37A2f2CbeBe8c67F65C9978',
      blockCreated: 0
    },
    ccipCrossChainBridge: {
      address: '0xF793d3D4372935C236422DFA9cd958ec14C80F55',
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
      address: '0xd9b59f89A8FEF69d2Dbc028C9f00087432589F72',
      blockCreated: 0
    },
    hub: {
      address: '0x78a321E00Be5bf8Df399FCE76D92fd5C900638c9',
      blockCreated: 0
    },
    ccipCrossChainBridge: {
      address: '0xA5fBbb4B142A8062b37A2f2CbeBe8c67F65C9978',
      blockCreated: 0
    }
  }
})
