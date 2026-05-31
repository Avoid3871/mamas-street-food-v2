import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import './Menu.css'
import { defaultMenuData } from '../data/defaultMenu.js'
import { HandDrawnBurger, HandDrawnFries, HandDrawnBowl, HandDrawnSpecials, HandDrawnDessert, HandDrawnDrink } from './Icons'

const tagColors = {
  vegan: { bg: '#4ade80', color: '#ffffff' },
  vegetarisch: { bg: '#4ade80', color: '#ffffff' },
  scharf: { bg: '#ef4444', color: '#ffffff' },
  beliebt: { bg: 'var(--color-accent)', color: '#ffffff' },
  neu: { bg: '#5B7AF0', color: '#ffffff' },
  hausgemacht: { bg: 'var(--color-illust)', color: 'var(--color-bg-dark)' },
}

const CategoryIcon = ({ category }) => {
  switch (category) {
    case 'burger': return <HandDrawnBurger className="menu__cat-icon" />
    case 'fries': return <HandDrawnFries className="menu__cat-icon" />
    case 'bowls': return <HandDrawnBowl className="menu__cat-icon" />
    case 'specials': return <HandDrawnSpecials className="menu__cat-icon" />
    case 'desserts': return <HandDrawnDessert className="menu__cat-icon" />
    case 'drinks': return <HandDrawnDrink className="menu__cat-icon" />
    default: return <HandDrawnBurger className="menu__cat-icon" />
  }
}

export default function Menu() {
  const [menuData, setMenuData] = useState(defaultMenuData)
  const [activeCategory, setActiveCategory] = useState(Object.keys(defaultMenuData)[0])

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch('/api/menu')
        if (res.ok) {
          const data = await res.json()
          setMenuData(data)
          setActiveCategory(Object.keys(data)[0])
        }
      } catch (err) {
        console.warn('Could not fetch menu from API, using default.')
      }
    }
    fetchMenu()
  }, [])

  const categories = Object.keys(menuData)
  const category = menuData[activeCategory] || menuData[categories[0]]

  return (
    <section id="menu" className="menu section section--light">
      <div className="container">
        <motion.div
          className="menu__header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display menu__title">Speisekarte</h2>
        </motion.div>

        <div className="menu__layout">
          {/* Sidebar / Tabs */}
          <div className="menu__sidebar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`menu__tab ${activeCategory === cat ? 'menu__tab--active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                <CategoryIcon category={cat} />
                {menuData[cat].label}
              </button>
            ))}
          </div>

          {/* Items */}
          <div className="menu__content">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                className="menu__items"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="menu__category-title font-display">{category.label}</h3>
                <div className="menu__table">
                  {category.items.map((item, i) => (
                    <motion.div
                      key={item.name + i}
                      className="menu-item"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                    >
                      <div className="menu-item__info">
                        <div className="menu-item__name-row">
                          <h4 className="menu-item__name">{item.name}</h4>
                          {item.tag && (
                            <span
                              className="menu-item__tag"
                              style={{
                                background: tagColors[item.tag]?.bg || tagColors.beliebt.bg,
                                color: tagColors[item.tag]?.color || tagColors.beliebt.color,
                              }}
                            >
                              {item.tag}
                            </span>
                          )}
                        </div>
                        <p className="menu-item__desc">{item.desc}</p>
                      </div>
                      <div className="menu-item__dots" />
                      <span className="menu-item__price font-display">{item.price}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
