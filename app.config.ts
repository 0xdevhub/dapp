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

export const socialMedia = [
  {
    label: 'Twitter',
    href: 'https://twitter.com/0xdevhub',
    icon: 'twitter'
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/GJrdB4Yp',
    icon: 'discord'
  }
]

const appConfig = {
  name: '0xdevhub',
  meta: {
    description: 'on-chain & off-chain dev hub'
  },
  routes,
  socialMedia
}

export default appConfig
