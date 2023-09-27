import { useCurrentLocale } from '@/locales/client'
import { usePathname } from 'next/navigation'

export const useCurrentPath = (href: string) => {
  const currentLocale = useCurrentLocale()
  const pathname = usePathname()
  const isCurrentPath = pathname === `/${currentLocale + href}`

  return {
    isCurrentPath
  }
}

export default useCurrentPath
