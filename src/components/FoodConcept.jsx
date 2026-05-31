import { motion } from 'framer-motion'
import './FoodConcept.css'
import foodChicken from '../assets/food-chicken.jpg'
import foodBowl from '../assets/food-bowl.jpg'
import foodDessert from '../assets/food-dessert.jpg'

const photos = [
  { img: foodChicken, title: 'Crispy Favourites', text: 'Knusprig, saftig, hausgemacht', tag: 'Beliebt' },
  { img: foodBowl, title: 'Bowls & More', text: 'Frisch, bunt, kreativ', tag: null },
  { img: foodDessert, title: 'Süße Versuchung', text: 'Desserts mit Liebe', tag: 'Neu' },
]

const features = [
  { icon: '🌍', title: 'Global Inspiriert', text: 'Streetfood-Klassiker aus aller Welt — kreativ neu interpretiert.' },
  { icon: '🌱', title: 'Frisch & Bunt', text: 'Saisonale Zutaten, vegane Optionen, alles frisch zubereitet.' },
  { icon: '❤️', title: 'Mit Herz Gemacht', text: 'Hausgemachte Soßen, kreative Rezepte, jede Menge Leidenschaft.' },
]

export default function FoodConcept() {
  return (
    <section id="food" className="food-concept section">
      <div className="ambient-glow ambient-glow--red food-concept__glow" />
      <div className="container">
        <motion.div
          className="food-concept__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <span className="section__label" style={{ justifyContent: 'center' }}>Das Konzept</span>
          <h2 className="section__title">Streetfood mit Persönlichkeit.</h2>
          <p className="food-concept__desc">
            Von saftigen Burgern und knusprigen Loaded Fries bis hin zu kreativen Bowls und 
            hausgemachten Desserts — bei uns wird alles frisch, bunt und mit Liebe gemacht.
          </p>
        </motion.div>

        {/* Bento Photo Grid */}
        <div className="food-concept__bento">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.title}
              className="food-concept__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <img src={photo.img} alt={photo.title} />
              {photo.tag && <span className="food-concept__item-tag">{photo.tag}</span>}
              <div className="food-concept__item-overlay">
                <h3 className="food-concept__item-title">{photo.title}</h3>
                <p className="food-concept__item-text">{photo.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features */}
        <div className="food-concept__features">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="food-concept__feature glass"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="food-concept__feature-icon">{feature.icon}</div>
              <h3 className="food-concept__feature-title">{feature.title}</h3>
              <p className="food-concept__feature-text">{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
