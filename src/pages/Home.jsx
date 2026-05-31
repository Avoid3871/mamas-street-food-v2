import { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import FoodConcept from '../components/FoodConcept'
import Menu from '../components/Menu'
import Events from '../components/Events'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
import LegalModal from '../components/LegalModal'

export default function Home() {
  const [scrollY, setScrollY] = useState(0)
  const [showImpressum, setShowImpressum] = useState(false)
  const [showDatenschutz, setShowDatenschutz] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="app">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <About />
        <FoodConcept />
        <Menu />
        <Events />
        <Contact />
      </main>
      <Footer 
        onOpenImpressum={() => setShowImpressum(true)} 
        onOpenDatenschutz={() => setShowDatenschutz(true)} 
      />

      {/* Impressum Modal */}
      <LegalModal 
        isOpen={showImpressum} 
        onClose={() => setShowImpressum(false)} 
        title="Impressum"
      >
        <h4>Angaben gemäß § 5 TMG</h4>
        <p>
          Mama's Streetfood Bar<br />
          Katrin Hartwich<br />
          Unterer Markt 19<br />
          92637 Weiden in der Oberpfalz
        </p>
        
        <h4>Kontakt</h4>
        <p>
          Telefon: 0961 63450123<br />
          Instagram: @mamas.streetfood.bar
        </p>

        <h4>Umsatzsteuer-ID</h4>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
          [Bitte noch eintragen]
        </p>

        <h4>Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h4>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </LegalModal>

      {/* Datenschutz Modal */}
      <LegalModal 
        isOpen={showDatenschutz} 
        onClose={() => setShowDatenschutz(false)} 
        title="Datenschutzerklärung"
      >
        <h4>1. Datenschutz auf einen Blick</h4>
        <p>
          <strong>Allgemeine Hinweise</strong><br />
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
        </p>
        
        <h4>2. Hosting</h4>
        <p>
          Wir hosten die Inhalte unserer Website bei Vercel. Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
        </p>

        <h4>3. Verantwortliche Stelle</h4>
        <p>
          Mama's Streetfood Bar<br />
          Katrin Hartwich<br />
          Unterer Markt 19<br />
          92637 Weiden in der Oberpfalz<br />
          Instagram: @mamas.streetfood.bar
        </p>
      </LegalModal>
    </div>
  )
}
