import { MenuListItemProps } from './app/components/header/menu/MenuListItem'
import { Locales } from './locales/locales'

export const routes: MenuListItemProps[] = [
  {
    label: Locales.HOME,
    href: '/'
  },
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
