import { Locales } from './locales/locales'

export const routes = [
  {
    label: Locales.HOME,
    href: '/'
  },
  {
    label: Locales.WIZARD,
    href: '/wizard/',
    variant: 'secondary'
  },
  {
    label: Locales.STORE,
    href: '/store/'
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
  },
  {
    label: 'Github',
    href: 'https://github.com/0xdevhub',
    icon: 'github'
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
