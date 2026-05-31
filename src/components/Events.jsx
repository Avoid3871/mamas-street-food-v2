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
    <section id="events" className="events section section--light">
      <div className="container">
        <motion.div
          className="events__content"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          {/* Text Side */}
          <div className="events__text">
            <h2 className="font-display events__title">Mehr als nur essen — Raum für Begegnungen.</h2>
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
                className="btn btn--accent"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Folg uns auf Instagram
              </motion.a>
            </div>
          </div>

          {/* Event Cards */}
          <div className="events__grid">
            {events.map((event, i) => (
              <motion.div
                key={event.title}
                className="events__card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                {event.badge && <span className="events__card-badge">{event.badge}</span>}
                <span className="events__card-icon">{event.icon}</span>
                <h3 className="events__card-title font-display">{event.title}</h3>
                <p className="events__card-desc">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
