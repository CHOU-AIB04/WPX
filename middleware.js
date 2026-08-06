// middleware.js — Locale routing & x-locale header injection

import { NextResponse } from 'next/server'

const SUPPORTED_LOCALES = ['en', 'es']

export function middleware(request) {
  const { pathname } = request.nextUrl

  // Skip static files, API routes, Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/favicon') ||
    pathname.match(/\.(ico|png|jpg|jpeg|svg|webp|gif|css|js|woff|woff2|ttf|xml|txt|pdf)$/)
  ) {
    return NextResponse.next()
  }

  // Redirect /fr → / and /fr/... → /... (French is at the root)
  if (pathname === '/fr') {
    return NextResponse.redirect(new URL('/', request.url))
  }
  if (pathname.startsWith('/fr/')) {
    return NextResponse.redirect(new URL(pathname.replace('/fr', ''), request.url))
  }

  // Detect locale from pathname
  const locale = SUPPORTED_LOCALES.find(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`)
  ) || 'fr'

  // Inject locale header so the root layout can read it
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-locale', locale)
  requestHeaders.set('x-pathname', pathname)

  return NextResponse.next({ request: { headers: requestHeaders } })
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}
