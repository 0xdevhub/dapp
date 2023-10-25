import { useCurrentLocale } from '@/locales/client'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

export const useCurrentPath = (href: string) => {
  const currentLocale = useCurrentLocale()
  const pathname = usePathname()

  const isCurrentPath = useMemo(
    () => pathname === `/${currentLocale + href}`,
    [currentLocale, href, pathname]
  )

  return {
    isCurrentPath
  }
}

export default useCurrentPath
