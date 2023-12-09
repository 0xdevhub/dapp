const pt = {
  PAGES: {
    APPS: {
      TITLE: 'Apps',
      CROSSCHAIN_NFT_BRIDGE: {
        FROM: 'De',
        TO: 'Para',
        ERC721_ADDRESS: 'Endereço ERC721',
        ERC721_NFT_TO_BRIDGE_LABEL: 'ERC721 NFT para ponte',
        BRIDGE: 'Transferir',
        APPROVE_NFT: 'Aprovar NFT',
        FEES: 'Taxas',
        FEEDBACK: {
          SUCCESS_TO: 'Seu ERC721 foi transferido com sucesso para',
          ERROR_TO: 'Ocorreu um erro ao transferir seu ERC721 para'
        }
      }
    }
  },
  FEEDBACK: {
    NOT_ALLOWED: 'Não permitido',
    NO_APPS_FOUND: 'Nenhum app encontrado',
    NO_WIDGET_AVAILABLE: 'Nenhum widget disponível'
  },
  LANGUAGE: {
    TITLE: 'Idioma'
  },
  THEME: {
    TITLE: 'Tema',
    LIGHT: 'Claro',
    DARK: 'Escuro'
  },
  WALLET: {
    TITLE: 'Carteira',
    CONNECT: 'Conectar',
    CONNECTING: 'Conectando',
    DISCONNECT: 'Desconectar',
    NOT_ALLOWED: 'Não permitido',
    ADDRESS: 'Endereço',
    BALANCE: 'Saldo'
  },
  NETWORK: {
    TITLE: 'Rede',
    MAINNET: 'Mainnet',
    TESTNET: 'Testnet'
  }
} as const

export default pt
