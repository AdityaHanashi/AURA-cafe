import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Dish {
  name: string;
  price: string;
  desc: string;
  ingredients: string[];
}

export default function MenuSection() {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const categories = [
    { name: "Artisan Pizza", items: [
      { name: "Truffle Mushroom", price: "₹1,450", desc: "Wild mushrooms, truffle oil, mozzarella, thyme", ingredients: ["00 Flour", "San Marzano Tomatoes", "Wild Forest Mushrooms", "White Truffle Oil", "Fior di Latte Mozzarella", "Fresh Thyme", "Aged Parmesan"] },
      { name: "Spicy Diavola", price: "₹1,250", desc: "Spicy salami, nduja, chili flakes, fresh basil", ingredients: ["00 Flour", "San Marzano Tomatoes", "Spicy Calabrian Salami", "Nduja Sausage", "Red Chili Flakes", "Fresh Basil", "Buffalo Mozzarella"] },
      { name: "Margherita Extra", price: "₹950", desc: "San Marzano tomatoes, buffalo mozzarella, basil", ingredients: ["00 Flour", "San Marzano Tomatoes", "Buffalo Mozzarella D.O.P.", "Fresh Basil", "Extra Virgin Olive Oil", "Sea Salt"] },
    ]},
    { name: "Signature Coffee", items: [
      { name: "Ethiopian Yirgacheffe", price: "₹450", desc: "Pour over, notes of jasmine and citrus", ingredients: ["Single-Origin Ethiopian Yirgacheffe Beans", "Filtered Water", "Jasmine Note Profile", "Citrus Zest Hints"] },
      { name: "Pistachio Latte", price: "₹550", desc: "Espresso, roasted pistachio cream, oat milk", ingredients: ["Double Shot Espresso", "Roasted Pistachio Paste", "Oat Milk", "Crushed Pistachio Garnish", "Vanilla Syrup"] },
      { name: "Cold Brew Reserve", price: "₹400", desc: "24-hour steeped, served over a clear ice sphere", course: "drinks", ingredients: ["Reserve Arabica Blend", "Cold Filtered Water", "Clear Ice Sphere", "Optional Orange Twist"] },
    ]}
  ]

  return (
    <section className="py-24 bg-transparent text-white relative z-10">
      <div className="container mx-auto px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-serif font-bold text-center mb-20 text-primary"
        >
          Our Menu
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {categories.map((cat, i) => (
            <motion.div 
              key={cat.name}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-3xl font-serif mb-8 border-b border-white/10 pb-4 text-white/90">
                {cat.name}
              </h3>
              
              <div className="space-y-8">
                {isLoading ? (
                  // Skeleton Loaders
                  Array.from({ length: 3 }).map((_, idx) => (
                    <div key={idx} className="p-4 -mx-4 rounded-xl animate-pulse">
                      <div className="flex justify-between items-baseline mb-4">
                        <div className="h-6 bg-white/10 rounded w-2/3"></div>
                        <div className="h-6 bg-white/10 rounded w-16"></div>
                      </div>
                      <div className="h-4 bg-white/5 rounded w-full mb-2"></div>
                      <div className="h-4 bg-white/5 rounded w-4/5"></div>
                    </div>
                  ))
                ) : (
                  // Actual Menu Items
                  cat.items.map((item, j) => (
                    <motion.div 
                      key={item.name} 
                      className="group cursor-pointer p-4 -mx-4 rounded-xl hover:bg-white/5 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * j }}
                      onClick={() => setSelectedDish(item as Dish)}
                    >
                      <div className="flex justify-between items-baseline mb-2">
                        <h4 className="text-xl font-medium tracking-wide group-hover:text-primary transition-colors">
                          {item.name}
                        </h4>
                        <span className="text-primary font-serif text-lg">{item.price}</span>
                      </div>
                      <p className="text-white/50 text-sm tracking-wider uppercase font-light">
                        {item.desc}
                      </p>
                    </motion.div>
                  ))
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Dish Details Modal */}
      <AnimatePresence>
        {selectedDish && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedDish(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              className="bg-[#111] border border-primary/30 p-8 md:p-12 rounded-2xl max-w-lg w-full shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedDish(null)}
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors text-2xl"
              >
                &times;
              </button>
              <h3 className="text-3xl font-serif text-primary mb-2">{selectedDish.name}</h3>
              <p className="text-2xl font-serif text-white mb-6">{selectedDish.price}</p>
              
              <div className="mb-8">
                <p className="text-white/80 italic mb-6">"{selectedDish.desc}"</p>
                <h4 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4 border-b border-white/10 pb-2">Ingredients</h4>
                <ul className="space-y-2">
                  {selectedDish.ingredients.map((ing, idx) => (
                    <li key={idx} className="text-white/90 flex items-center before:content-['•'] before:text-primary before:mr-3">
                      {ing}
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                onClick={() => setSelectedDish(null)}
                className="w-full py-4 bg-primary text-black font-bold uppercase tracking-widest rounded-full hover:bg-primary/90 transition-colors"
              >
                Add to Order
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
