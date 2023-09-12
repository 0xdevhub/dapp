export const routes = [
  {
    label: 'Início',
    href: '/'
  },
  {
    label: 'Aplicativos',
    href: '/apps/',
    customClass: true
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
