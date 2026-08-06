// app/[locale]/services/page.jsx — EN / ES services page

import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/i18n'
import ServicesHero from '@/components/sections/services/ServicesHero'
import ServicesGrid from '@/components/sections/services/ServicesGrid'
import OneShotSection from '@/components/sections/services/OneShotSection'
import ServicesFAQ from '@/components/sections/services/ServicesFAQ'
import CTASection from '@/components/sections/home/CTASection'

const SUPPORTED = ['en', 'es']

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!SUPPORTED.includes(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: dict.meta.services_title,
    description: dict.meta.services_desc,
    alternates: {
      canonical: `https://www.wepushx.com/${locale}/services`,
    },
  }
}

export default async function LocaleServicesPage({ params }) {
  const { locale } = await params
  if (!SUPPORTED.includes(locale)) notFound()

  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <OneShotSection />
      <ServicesFAQ />
      <CTASection />
    </>
  )
}
