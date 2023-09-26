export enum Locales {
  WALLET = 'WALLET',
  BALANCE = 'BALANCE',
  NETWORK = 'NETWORK',
  CONNECT = 'CONNECT',
  CONNECTING = 'CONNECTING',
  DISCONNECT = 'DISCONNECT',
  NOT_ALLOWED = 'NOT_ALLOWED',
  HOME = 'HOME',
  APPS = 'APPS',
  MY_PORTFOLIO = 'MY_PORTFOLIO',
  LANGUAGE = 'LANGUAGE',
  THEME = 'THEME',
  LIGHT = 'LIGHT',
  DARK = 'DARK'
}

export type LocalesKeys = {
  [key in Locales]: string
}
