import { motion } from 'framer-motion'
import './Hero.css'
import { HandDrawnBurger, HandDrawnFries, HandDrawnDrink } from './Icons'

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero section--light">
      <div className="container">
        <div className="hero__content">
          {/* Floating Icons */}
          <HandDrawnBurger className="hero__icon hero__icon--1 floating-icon" />
          <HandDrawnFries className="hero__icon hero__icon--2 floating-icon" style={{ animationDelay: '1s' }} />
          <HandDrawnDrink className="hero__icon hero__icon--3 floating-icon" style={{ animationDelay: '2s' }} />

          {/* Text Content */}
          <motion.div
            className="hero__text-area"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="hero__headline font-display"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Streetfood. <br/>
              <span className="italic">Community.</span> <br/>
              Liebe.
            </motion.h1>

            <motion.p 
              className="hero__desc"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Internationale Streetfood-Küche, kreative Events und echte Gemeinschaft — 
              alles kann, nichts muss. Dein neues Wohnzimmer am Unteren Markt in Weiden.
            </motion.p>

            <motion.div 
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <button className="btn btn--accent" onClick={() => scrollTo('menu')}>
                Speisekarte ansehen
              </button>
              <button className="btn btn--dark" onClick={() => scrollTo('concept')}>
                Unser Konzept
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
