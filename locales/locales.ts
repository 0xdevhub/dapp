export enum Locales {
  // Wallet
  WALLET = 'WALLET',
  BALANCE = 'BALANCE',
  NETWORK = 'NETWORK',
  CONNECT = 'CONNECT',
  CONNECTING = 'CONNECTING',
  DISCONNECT = 'DISCONNECT',
  NOT_ALLOWED = 'NOT_ALLOWED',

  // Navigation Bar
  HOME = 'HOME',
  STORE = 'STORE',

  // Navigation Wizard
  ONCHAIN = 'ONCHAIN',
  HYBRID = 'HYBRID',
  ASSETS = 'ASSETS',
  VAULTS = 'VAULTS',
  PRESALE = 'PRESALE',
  RECURRING_BUY = 'RECURRING_BUY',

  // Headings
  MY_PORTFOLIO = 'MY_PORTFOLIO',
  WIZARD = 'WIZARD',

  // Language
  LANGUAGE = 'LANGUAGE',

  // Themes
  THEME = 'THEME',
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

export type LocalesKeys = {
  [key in Locales]: string
}
