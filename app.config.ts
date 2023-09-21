import { Locales } from './locales/locales'

export const routes = [
  {
    label: Locales.NAVIGATION_MENU_ITEM_LABEL_HOME,
    href: '/'
  },
  {
    label: Locales.NAVIGATION_MENU_ITEM_LABEL_WIZARD,
    href: '/wizard/',
    variant: 'secondary'
  }
]

const appConfig = {
  name: '0xdevhub',
  meta: {
    description: 'Decentralized finance utility tools'
  },
  routes
}

export default appConfig
