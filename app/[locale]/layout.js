// app/[locale]/layout.js — Minimal layout for /en and /es routes
// Root layout (app/layout.js) already handles Header, Footer, LocaleProvider via x-locale header.
// This layout only handles locale-specific metadata.

import { getDictionary, LOCALES } from '@/lib/i18n'
import { notFound } from 'next/navigation'

const SUPPORTED = ['en', 'es']

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!SUPPORTED.includes(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: {
      default: dict.meta.home_title,
      template: `%s | WePushX`,
    },
    description: dict.meta.home_desc,
    alternates: {
      canonical: locale === 'en' ? 'https://www.wepushx.com/en' : 'https://www.wepushx.com/es',
      languages: {
        'fr':        'https://www.wepushx.com',
        'en':        'https://www.wepushx.com/en',
        'es':        'https://www.wepushx.com/es',
        'x-default': 'https://www.wepushx.com',
      },
    },
  }
}

export function generateStaticParams() {
  return SUPPORTED.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params
  if (!SUPPORTED.includes(locale)) notFound()
  return children
}
