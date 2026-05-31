import { motion } from 'framer-motion'
import './FoodConcept.css'
import foodChicken from '../assets/food-chicken.jpg'
import foodBowl from '../assets/food-bowl.jpg'
import foodDessert from '../assets/food-dessert.jpg'

const photos = [
  { img: foodChicken, title: 'Crispy Favourites', text: 'Knusprig, saftig, hausgemacht' },
  { img: foodBowl, title: 'Bowls & More', text: 'Frisch, bunt, kreativ' },
  { img: foodDessert, title: 'Süße Versuchung', text: 'Desserts mit Liebe' },
]

export default function FoodConcept() {
  return (
    <section id="concept" className="food-concept section section--light">
      <div className="container">
        <motion.div
          className="food-concept__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display food-concept__title">Streetfood mit Persönlichkeit.</h2>
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
              className="food-concept__item rounded-image"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <img src={photo.img} alt={photo.title} />
              <div className="food-concept__item-overlay">
                <h3 className="food-concept__item-title font-display">{photo.title}</h3>
                <p className="food-concept__item-text">{photo.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
