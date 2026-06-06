'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowRight } from 'lucide-react'
import Image from 'next/image'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const route = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        role="banner"
      >
        <div
          className="flex items-center justify-between gap-6 px-5 py-3 rounded-2xl w-full transition-all duration-400"
          style={{
            maxWidth: '1000px',
            background: scrolled ? 'rgba(5,5,5,0.9)' : 'rgba(5,5,5,0.65)',
            backdropFilter: 'blur(20px)',
            border: scrolled ? '1px solid rgba(0,245,255,0.18)' : '1px solid rgba(255,255,255,0.08)',
            boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.5)' : 'none',
          }}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0" aria-label="WePushX — Accueil">
            <Image src={"/wpx.png"} width={100} height={100} alt='wepushx Agence digital' className='w-[100px] ' />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navigation principale">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200"
                  style={{
                    color: active ? '#00F5FF' : 'rgba(255,255,255,0.65)',
                    background: active ? 'rgba(0,245,255,0.08)' : 'transparent',
                  }}
                  onMouseEnter={(e) => { if (!active) { e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' } }}
                  onMouseLeave={(e) => { if (!active) { e.currentTarget.style.color = 'rgba(255,255,255,0.65)'; e.currentTarget.style.background = 'transparent' } }}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <div onClick={()=>{route.push("/contact"),window.scrollTo({top:1000,behavior:"smooth"})}} className="btn-primary text-sm px-5 py-2.5">
              Audit <ArrowRight size={14} />
            </div>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center transition-colors"
            style={{ background: 'rgba(255,255,255,0.05)', color: '#fff' }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 flex flex-col pt-24 px-5 pb-10"
            style={{ background: 'rgba(0,0,0,0.97)', backdropFilter: 'blur(16px)' }}
          >
            <nav className="flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const active = pathname === link.href
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.28, delay: i * 0.06 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-5 py-4 rounded-xl text-lg font-medium"
                      style={{
                        color: active ? '#00F5FF' : '#fff',
                        background: active ? 'rgba(0,245,255,0.08)' : 'rgba(255,255,255,0.04)',
                        border: '1px solid rgba(255,255,255,0.07)',
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                )
              })}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: 0.22 }}
              className="mt-6"
            >
              <Link href="/contact" className="btn-primary w-full justify-center text-base py-4">
                Réserver mon Audit <ArrowRight size={17} />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
