import { motion } from 'framer-motion'
import './About.css'
import oldRestaurant from '../assets/old-restaurant.jpg'

export default function About() {
  return (
    <section id="about" className="about section">
      <div className="ambient-glow ambient-glow--pink about__glow" />
      <div className="container">
        <div className="about__content">
          {/* Photo Side */}
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
          >
            <div className="about__image-wrapper">
              <img src={oldRestaurant} alt="Mama's Fresh Streetfood Company — der Anfang" />
              <div className="about__image-overlay" />
            </div>
            <motion.div
              className="about__float-card glass"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
            >
              <span className="about__float-year">2024</span>
              <span className="about__float-label">Neues Kapitel</span>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <span className="section__label">Unsere Geschichte</span>
            <h2 className="section__title">Von der Bude zum Wohnzimmer.</h2>

            <p className="about__desc">
              Angefangen als kleiner Imbiss — die "Mama's Fresh Streetfood Company" in der 
              Regensburger Straße — hat sich Mama's 2024 extrem weiterentwickelt. Gründerin 
              Katrin (Kati) Hartwich hat das Konzept zu einem echten Treffpunkt für Weiden gemacht.
            </p>

            <p className="about__desc">
              Heute ist Mama's Streetfood Bar am Unteren Markt 19 (im ehemaligen "Locura") mehr als 
              ein Restaurant. Es ist ein offener Raum für Gemeinschaft, Kreativität und entspanntes 
              Zusammensein — inklusive Events wie Yoga-Brunch, Rap-Frühschoppen und Pop-ups.
            </p>

            <div className="about__quote glass--pink">
              <p className="about__quote-text">
                „Alles kann, nichts muss. Ein Ort, an dem man sich wohlfühlt — wie bei Mama eben."
              </p>
              <span className="about__quote-author">— Kati Hartwich, Gründerin</span>
            </div>

            <div className="about__stats">
              <div>
                <span className="about__stat-value">♥</span>
                <p className="about__stat-label">Gemacht mit Liebe</p>
              </div>
              <div>
                <span className="about__stat-value">100%</span>
                <p className="about__stat-label">Frisch zubereitet</p>
              </div>
              <div>
                <span className="about__stat-value">∞</span>
                <p className="about__stat-label">Community Events</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
