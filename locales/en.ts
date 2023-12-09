const en = {
  PAGES: {
    APPS: {
      TITLE: 'Apps',
      CROSSCHAIN_NFT_BRIDGE: {
        FROM: 'From',
        TO: 'To',
        ERC721_ADDRESS: 'ERC721 Address',
        ERC721_NFT_TO_BRIDGE_LABEL: 'ERC721 NFT to bridge',
        BRIDGE: 'Bridge',
        APPROVE_NFT: 'Approve NFT',
        FEES: 'Fees',
        FEEDBACK: {
          SUCCESS_TO: 'Your ERC721 has been bridged successfully to',
          ERROR_TO: 'An error occurred while bridging your ERC721'
        }
      }
    }
  },
  FEEDBACK: {
    NOT_ALLOWED: 'Not allowed',
    NO_APPS_FOUND: 'No apps found',
    NO_WIDGET_AVAILABLE: 'No widget available'
  },
  LANGUAGE: {
    TITLE: 'Language'
  },
  THEME: {
    TITLE: 'Theme',
    LIGHT: 'Light',
    DARK: 'Dark'
  },
  WALLET: {
    TITLE: 'Wallet',
    CONNECT: 'Connect',
    CONNECTING: 'Connecting',
    DISCONNECT: 'Disconnect',
    NOT_ALLOWED: 'Not allowed',
    ADDRESS: 'Address',
    BALANCE: 'Balance'
  },
  NETWORK: {
    TITLE: 'Network',
    MAINNET: 'Mainnet',
    TESTNET: 'Testnet'
  }
} as const

export default en
