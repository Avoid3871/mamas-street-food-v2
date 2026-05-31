import { motion } from 'framer-motion'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact section section--dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display contact__title">Wir freuen uns auf dich.</h2>
        </motion.div>

        <div className="contact__grid">
          {/* Info Cards */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {/* Address */}
            <div className="contact__info-card">
              <div className="contact__info-icon">📍</div>
              <div className="contact__info-content">
                <h4 className="font-display">Adresse</h4>
                <p>
                  Mama's Streetfood Bar<br />
                  Unterer Markt 19<br />
                  92637 Weiden in der Oberpfalz
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="contact__info-card">
              <div className="contact__info-icon">📞</div>
              <div className="contact__info-content">
                <h4 className="font-display">Telefon</h4>
                <p>
                  <a href="tel:096163450123">0961 63450123</a>
                </p>
              </div>
            </div>

            {/* Instagram */}
            <div className="contact__info-card">
              <div className="contact__info-icon">📱</div>
              <div className="contact__info-content">
                <h4 className="font-display">Instagram</h4>
                <p>
                  <a href="https://www.instagram.com/mamas.streetfood.bar/" target="_blank" rel="noopener noreferrer">
                    @mamas.streetfood.bar
                  </a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="contact__info-card">
              <div className="contact__info-icon">🕒</div>
              <div className="contact__info-content">
                <h4 className="font-display">Öffnungszeiten</h4>
                <div className="contact__hours">
                  <div className="contact__hours-row contact__hours-row--closed">
                    <span className="contact__hours-day">Montag</span>
                    <span className="contact__hours-time">Ruhetag</span>
                  </div>
                  <div className="contact__hours-row">
                    <span className="contact__hours-day">Di – Do</span>
                    <span className="contact__hours-time">11:00 – 22:00 Uhr</span>
                  </div>
                  <div className="contact__hours-row">
                    <span className="contact__hours-day">Freitag</span>
                    <span className="contact__hours-time">11:00 – 00:00 Uhr</span>
                  </div>
                  <div className="contact__hours-row">
                    <span className="contact__hours-day">Samstag</span>
                    <span className="contact__hours-time">09:00 – 00:00 Uhr</span>
                  </div>
                  <div className="contact__hours-row">
                    <span className="contact__hours-day">Sonntag</span>
                    <span className="contact__hours-time">09:00 – 22:00 Uhr</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            className="contact__map rounded-image"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.8!2d12.1585!3d49.6765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDQwJzM1LjQiTiAxMsKwMDknMzAuNiJF!5e0!3m2!1sde!2sde!4v1"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mama's Streetfood Bar Standort"
            />
          </motion.div>
        </div>
        
        {/* Cadeaubon / Gift Card Section */}
        <motion.div
           className="contact__giftcard"
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="contact__giftcard-content">
            <h3 className="font-display">Mach jemandem eine Freude!</h3>
            <p>Ein Gutschein für Mama's Streetfood Bar ist das perfekte Geschenk. Bei uns vor Ort erhältlich.</p>
          </div>
          <div className="contact__giftcard-icon">🎁</div>
        </motion.div>
      </div>
    </section>
  )
}
