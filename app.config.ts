export const routes = [
  {
    label: 'Início',
    href: '/'
  },
  {
    label: 'Aplicativos',
    href: '/apps/',
    variant: 'secondary'
  },
  {
    label: 'Documentação',
    href: '/docs/'
  }
]

const appConfig = {
  name: 'defihub',
  meta: {
    description: 'Decentralized finance utility tools'
  },
  routes
}

export default appConfig
