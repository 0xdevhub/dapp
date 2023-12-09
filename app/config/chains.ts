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
      address: '0xA77Bb3B4aC78198208922A6c919921b274be0F9c',
      blockCreated: 0
    },
    hub: {
      address: '0x68000Cd65cCCd59F5DB32e74115Ead44C391A391',
      blockCreated: 0
    },
    crosschainNFTBridgeContract: {
      address: '0xd9036eFA61D5F213fc3CD07787e26597d2a8c364',
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
      address: '0x52Ef16e646A21150b6f8D7A41F0D6A9483EC2196',
      blockCreated: 0
    },
    hub: {
      address: '0xf327D8cEEf6A89DF6081d046697842C7153e1B2c',
      blockCreated: 0
    },
    crosschainNFTBridgeContract: {
      address: '0xd9036eFA61D5F213fc3CD07787e26597d2a8c364',
      blockCreated: 0
    }
  }
})
