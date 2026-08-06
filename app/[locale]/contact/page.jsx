// app/[locale]/contact/page.jsx — EN / ES contact page

import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/i18n'
import ContactSection from '@/components/sections/contact/ContactSection'

const SUPPORTED = ['en', 'es']

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!SUPPORTED.includes(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: dict.meta.contact_title,
    description: dict.meta.contact_desc,
    alternates: {
      canonical: `https://www.wepushx.com/${locale}/contact`,
    },
  }
}

export default async function LocaleContactPage({ params }) {
  const { locale } = await params
  if (!SUPPORTED.includes(locale)) notFound()
  return <ContactSection />
}
