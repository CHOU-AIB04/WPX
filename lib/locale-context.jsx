'use client'
// lib/locale-context.jsx
// The root layout is persistent in Next.js App Router and doesn't re-run on
// client navigation. So we preload ALL three dictionaries server-side, pass
// them here as `dicts`, and use usePathname() to reactively pick the right
// one whenever the URL changes (e.g. user clicks EN/ES switcher).

import { createContext, useContext } from 'react'
import { usePathname } from 'next/navigation'

const LocaleContext = createContext({ locale: 'fr', dict: {} })

function getLocaleFromPath(pathname) {
  if (!pathname) return 'fr'
  if (pathname === '/en' || pathname.startsWith('/en/')) return 'en'
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es'
  return 'fr'
}

export function LocaleProvider({ dicts, children }) {
  const pathname = usePathname()
  const locale = getLocaleFromPath(pathname)
  const dict = dicts?.[locale] || dicts?.fr || {}

  return (
    <LocaleContext.Provider value={{ locale, dict }}>
      {children}
    </LocaleContext.Provider>
  )
}

export function useLocale() {
  return useContext(LocaleContext)
}
