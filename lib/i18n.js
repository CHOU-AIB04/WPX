// lib/i18n.js — Loads locale dictionary from /locales/*.json
// Called in server components (layout, pages)

const dictionaries = {
  fr: () => import('@/locales/fr.json').then((m) => m.default),
  en: () => import('@/locales/en.json').then((m) => m.default),
  es: () => import('@/locales/es.json').then((m) => m.default),
}

export const LOCALES = ['fr', 'en', 'es']
export const DEFAULT_LOCALE = 'fr'

export async function getDictionary(locale) {
  const load = dictionaries[locale] ?? dictionaries[DEFAULT_LOCALE]
  return load()
}

// Detect locale from URL pathname (used in middleware / root layout)
export function getLocaleFromPathname(pathname) {
  if (pathname.startsWith('/en/') || pathname === '/en') return 'en'
  if (pathname.startsWith('/es/') || pathname === '/es') return 'es'
  return 'fr'
}
