import { motion } from 'framer-motion'
import './Events.css'

const events = [
  {
    icon: '🧘',
    title: 'Yoga-Brunch',
    desc: 'Entspannte Yoga-Session am Morgen, gefolgt von einem ausgiebigen Brunch mit Freunden.',
    badge: 'Regelmäßig'
  },
  {
    icon: '🎤',
    title: 'Rap-Frühschoppen',
    desc: 'Beats, Bars und Brunch — unser kreatives Format für Musikliebhaber am Wochenende.',
    badge: null
  },
  {
    icon: '💪',
    title: 'Pilates-Boost',
    desc: 'Starte fit in den Tag mit unserer Pilates-Session und tanke danach Energie bei uns.',
    badge: 'Regelmäßig'
  },
  {
    icon: '🎉',
    title: 'Pop-up Events',
    desc: 'Überraschungsformate, besondere Aktionen und kreative Ideen — folge uns auf Insta!',
    badge: 'Neu'
  }
]

export default function Events() {
  return (
    <section id="events" className="events section">
      <div className="ambient-glow ambient-glow--blue events__glow" />
      <div className="container">
        <motion.div
          className="events__content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Text Side */}
          <motion.div
            className="events__text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="section__label">Community & Events</span>
            <h2 className="section__title">Mehr als nur essen — Raum für Begegnungen.</h2>
            <p className="events__description">
              Mama's ist eine Plattform für kreative Formate und Erlebnisse. Neben gutem Essen 
              organisieren wir regelmäßig Events, die Weiden bewegen.
            </p>
            <p className="events__description">
              Entspannte Yoga-Sessions mit Brunch, Pilates-Boosts, Rap-Frühschoppen und spontane 
              Pop-up-Ideen. Auch für die Kids gibt es immer wieder besondere Aktionen.
            </p>

            <div className="events__cta">
              <motion.a
                href="https://www.instagram.com/mamas.streetfood.bar/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
                Folg uns auf Instagram
              </motion.a>
            </div>
          </motion.div>

          {/* Event Cards */}
          <div className="events__grid">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                className="events__card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {event.badge && <span className="events__card-badge">{event.badge}</span>}
                <span className="events__card-icon">{event.icon}</span>
                <h3 className="events__card-title">{event.title}</h3>
                <p className="events__card-desc">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
