import { Locale } from './locales'

console.log('Loaded PT')

const pt: Locale = {
  // Wallet
  WALLET_CONNECT_STANDBY_BUTTON_LABEL: 'Acessar',
  WALLET_CONNECT_CONNECTING_BUTTON_LABEL: 'Acessando',

  // Navigation
  NAVIGATION_MENU_ITEM_LABEL_HOME: 'Início',
  NAVIGATION_MENU_ITEM_LABEL_APPS: 'Aplicativos',
  NAVIGATION_MENU_ITEM_LABEL_DOCS: 'Documentação'
} as const

export default pt
