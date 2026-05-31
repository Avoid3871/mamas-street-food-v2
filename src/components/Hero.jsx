import { motion } from 'framer-motion'
import './Hero.css'
import heroImage from '../assets/hero-interior.jpg'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      {/* Background */}
      <div className="hero__bg">
        <img src={heroImage} alt="Mama's Streetfood Bar Interior" />
        <div className="hero__bg-overlay" />
        <div className="hero__bg-gradient" />
      </div>

      <div className="container">
        <div className="hero__content">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="hero__badge"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <span className="hero__badge-dot" />
              Weiden's Wohnzimmer
            </motion.div>

            <h1 className="hero__headline">
              Streetfood.{' '}
              <span className="hero__headline-accent">Community.</span>{' '}
              Liebe.
            </h1>

            <p className="hero__desc">
              Internationale Streetfood-Küche, kreative Events und echte Gemeinschaft — 
              alles kann, nichts muss. Dein neues Wohnzimmer am Unteren Markt in Weiden.
            </p>

            <div className="hero__actions">
              <motion.button
                className="btn btn--primary"
                onClick={() => scrollTo('menu')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Speisekarte ansehen
              </motion.button>
              <motion.button
                className="btn btn--outline"
                onClick={() => scrollTo('about')}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Unsere Story
              </motion.button>
            </div>
          </motion.div>

          {/* Hours Card */}
          <motion.div
            className="hero__card glass"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <h3 className="hero__card-title">
              🕒 Öffnungszeiten
            </h3>
            <div className="hero__hours-row hero__hours-row--closed">
              <span className="hero__hours-day">Montag</span>
              <span className="hero__hours-time">Ruhetag</span>
            </div>
            <div className="hero__hours-row">
              <span className="hero__hours-day">Di – Do</span>
              <span className="hero__hours-time">11:00 – 22:00</span>
            </div>
            <div className="hero__hours-row">
              <span className="hero__hours-day">Freitag</span>
              <span className="hero__hours-time">11:00 – 00:00</span>
            </div>
            <div className="hero__hours-row">
              <span className="hero__hours-day">Samstag</span>
              <span className="hero__hours-time">09:00 – 00:00</span>
            </div>
            <div className="hero__hours-row">
              <span className="hero__hours-day">Sonntag</span>
              <span className="hero__hours-time">09:00 – 22:00</span>
            </div>
            <div className="hero__card-address">
              📍 Unterer Markt 19, 92637 Weiden
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  )
}
