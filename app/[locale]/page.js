// app/[locale]/page.js — EN / ES homepage
// Section components are locale-aware via useLocale() context.

import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/i18n'
import HeroSection from '@/components/sections/home/HeroSection'
import StatsSection from '@/components/sections/home/StatsSection'
import WhyUsSection from '@/components/sections/home/WhyUsSection'
import ServicesSection from '@/components/sections/home/ServicesSection'
import ProcessSection from '@/components/sections/home/ProcessSection'
import ComparisonSection from '@/components/sections/shared/ComparisonSection'
import ResultsSection from '@/components/sections/home/ResultsSection'
import TestimonialsSection from '@/components/sections/home/TestimonialsSection'
import PricingSection from '@/components/sections/home/PricingSection'
import FAQSection from '@/components/sections/home/FAQSection'
import CTASection from '@/components/sections/home/CTASection'

const SUPPORTED = ['en', 'es']

export async function generateMetadata({ params }) {
  const { locale } = await params
  if (!SUPPORTED.includes(locale)) return {}
  const dict = await getDictionary(locale)
  return {
    title: dict.meta.home_title,
    description: dict.meta.home_desc,
  }
}

export default async function LocaleHomePage({ params }) {
  const { locale } = await params
  if (!SUPPORTED.includes(locale)) notFound()

  return (
    <>
      <HeroSection />
      <StatsSection />
      <WhyUsSection />
      <ServicesSection />
      <ProcessSection />
      <ComparisonSection />
      <ResultsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
    </>
  )
}
