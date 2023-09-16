import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'
import localeConfig from '@/locales/config'

const I18nMiddleware = createI18nMiddleware(localeConfig)

export function middleware(request: NextRequest) {
  return I18nMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}
