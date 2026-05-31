import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Navbar.css'
import logoImg from '../assets/logo.png'

const navLinks = [
  { label: 'Start', id: 'hero' },
  { label: 'Über Uns', id: 'about' },
  { label: 'Konzept', id: 'concept' },
  { label: 'Menü', id: 'menu' },
  { label: 'Events', id: 'events' },
  { label: 'Kontakt', id: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observers = []
    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-40% 0px -55% 0px' }
      )
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach((o) => o.disconnect())
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const scrollTo = (id) => {
    setMobileOpen(false)
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <div className="navbar__ticker">
        <div className="navbar__ticker-track">
          <span className="navbar__ticker-text">
            ++++ NEU: YOGA BRUNCH JEDEN SONNTAG ++++ MAMA'S STREETFOOD BAR ++++ DEIN WOHNZIMMER IN WEIDEN ++++ KOMM VORBEI UND GENIESSE ++++
          </span>
          <span className="navbar__ticker-text">
            ++++ NEU: YOGA BRUNCH JEDEN SONNTAG ++++ MAMA'S STREETFOOD BAR ++++ DEIN WOHNZIMMER IN WEIDEN ++++ KOMM VORBEI UND GENIESSE ++++
          </span>
        </div>
      </div>
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner">
          <button className="navbar__logo" onClick={() => scrollTo('hero')}>
            <img src={logoImg} alt="Mama's Streetfood Bar" className="navbar__logo-img" />
          </button>

          {/* Desktop */}
          <div className="navbar__links">
            {navLinks.map((link) => (
              <button
                key={link.id}
                className={`navbar__link ${activeSection === link.id ? 'navbar__link--active' : ''}`}
                onClick={() => scrollTo(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <button className="btn btn--dark navbar__cta-desktop" onClick={() => scrollTo('contact')}>
            Tisch Reservieren
          </button>

          {/* Hamburger */}
          <button
            className={`navbar__hamburger ${mobileOpen ? 'navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü öffnen"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="navbar__mobile-menu"
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: '-100%' }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  className="navbar__mobile-link font-display"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 + 0.1, duration: 0.3 }}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button 
                className="btn btn--dark"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                onClick={() => scrollTo('contact')}
              >
                Reservieren
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}
