import { LocalesKeys } from './locales'

const pt: LocalesKeys = {
  // Wallet
  PANEL_WALLET_TITLE: 'My Wallet',
  PANEL_WALLET_BALANCE_LABEL: 'Balance',
  PANEL_WALLET_NETWORK_LABEL: 'Network',
  WALLET_CONNECT_STANDBY_BUTTON_LABEL: 'Connect',
  WALLET_CONNECT_CONNECTING_BUTTON_LABEL: 'Connecting',
  WALLET_DESCONNECT_BUTTON_LABEL: 'Disconnect',

  // Navigation
  NAVIGATION_MENU_ITEM_LABEL_HOME: 'Home',
  NAVIGATION_MENU_ITEM_LABEL_WIZARD: 'Wizard',

  // Headings
  HEADING_HOME_TITLE: 'My Portfolio',
  HEADING_WIZARD_TITLE: 'Wizard',

  // Language
  PANEL_LANGUAGE_TITLE: 'Language',

  // Themes
  PANEL_THEME_TITLE: 'Theme',
  PANEL_THEME_TYPE_LIGHT_LABEL: 'Light',
  PANEL_THEME_TYPE_DARK_LABEL: 'Dark'
} as const

export default pt
