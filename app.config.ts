import { Locales } from './locales/locales'

export const routes = [
  {
    label: Locales.NAVIGATION_MENU_ITEM_LABEL_HOME,
    href: '/'
  }
  // {
  //   label: Locales.NAVIGATION_MENU_ITEM_LABEL_APPS,
  //   href: '/apps/',
  //   variant: 'secondary'
  // },
  // {
  //   label: Locales.NAVIGATION_MENU_ITEM_LABEL_DOCS,
  //   href: '/docs/'
  // }
]

const appConfig = {
  name: 'defihub',
  meta: {
    description: 'Decentralized finance utility tools'
  },
  routes
}

export default appConfig
