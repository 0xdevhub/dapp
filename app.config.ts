import { Locales } from './locales/locales'

export const routes = [
  {
    label: Locales.APPS,
    href: '/apps/',
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
    href: 'https://discord.gg/skvN5fnt5M',
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
