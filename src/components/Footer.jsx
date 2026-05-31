import './Footer.css'
import logoImg from '../assets/logo.png'

const currentYear = new Date().getFullYear()

export default function Footer({ onOpenImpressum, onOpenDatenschutz }) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <button className="footer__logo" onClick={() => scrollTo('hero')}>
              <img src={logoImg} alt="Mama's Streetfood Bar" className="footer__logo-img" />
            </button>
            <p className="footer__tagline">
              Streetfood aus aller Welt, kreative Events und echtes Gemeinschaftsgefühl — dein Wohnzimmer in Weiden.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Navigation</h4>
            <ul className="footer__links">
              <li><button onClick={() => scrollTo('hero')}>Start</button></li>
              <li><button onClick={() => scrollTo('about')}>Über Uns</button></li>
              <li><button onClick={() => scrollTo('menu')}>Speisekarte</button></li>
              <li><button onClick={() => scrollTo('events')}>Events</button></li>
              <li><button onClick={() => scrollTo('contact')}>Kontakt</button></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Kontakt</h4>
            <ul className="footer__links">
              <li><a href="tel:096163450123">0961 63450123</a></li>
              <li><a href="https://www.instagram.com/mamas.streetfood.bar/" target="_blank" rel="noopener noreferrer">@mamas.streetfood.bar</a></li>
              <li><span>Unterer Markt 19</span></li>
              <li><span>92637 Weiden i.d. OPf.</span></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Öffnungszeiten</h4>
            <ul className="footer__links footer__links--hours">
              <li className="footer__closed"><span>Montag</span><span>Ruhetag</span></li>
              <li><span>Di – Do</span><span>11 – 22 Uhr</span></li>
              <li><span>Freitag</span><span>11 – 00 Uhr</span></li>
              <li><span>Samstag</span><span>09 – 00 Uhr</span></li>
              <li><span>Sonntag</span><span>09 – 22 Uhr</span></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© {currentYear} Mama's Streetfood Bar – Katrin Hartwich. Alle Rechte vorbehalten.</p>
          <div className="footer__legal">
            <button onClick={onOpenImpressum} className="footer__legal-btn">Impressum</button>
            <button onClick={onOpenDatenschutz} className="footer__legal-btn">Datenschutz</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
