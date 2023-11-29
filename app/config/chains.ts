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
      address: '0x483E5D5a59EeB5dB9c2AAC502Da40fab173b8DF2',
      blockCreated: 0
    },
    hub: {
      address: '0x27aAd1692fD0F11C39c69c5412E52cCEf15045BD',
      blockCreated: 0
    },
    ccipCrossChainBridge: {
      address: '0x99302F8a76B6668F54D7eE16E035d948305ACeE1',
      blockCreated: 0
    }
  }
})
