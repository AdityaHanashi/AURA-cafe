import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import PageTransition from '../components/layout/PageTransition'
import { motion, AnimatePresence } from 'framer-motion'

interface SpecialDish {
  name: string;
  price: string;
  desc: string;
  ingredients: string[];
}

export default function SpecialsPage() {
  const [selectedSpecial, setSelectedSpecial] = useState<SpecialDish | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const specials = [
    { name: "Wagyu Beef Pizza", price: "₹1,450", desc: "A5 Wagyu, truffle shavings, gold leaf, aged balsamic", ingredients: ["A5 Japanese Wagyu Beef", "Fresh Black Truffle Shavings", "24k Edible Gold Leaf", "Aged Balsamic Glaze", "Fior di Latte"] },
    { name: "Lobster Thermidor Slice", price: "₹1,250", desc: "Fresh lobster, cognac cream sauce, gruyere cheese", ingredients: ["Fresh Maine Lobster", "Cognac Cream Sauce", "Aged Gruyere Cheese", "Tarragon", "Lemon Zest"] },
    { name: "Caviar & Burrata", price: "₹1,500", desc: "Beluga caviar, fresh Italian burrata, lemon zest", ingredients: ["Beluga Caviar", "Fresh Italian Burrata", "Amalfi Lemon Zest", "Extra Virgin Olive Oil", "Chives"] }
  ]

  return (
    <PageTransition>
      <Helmet>
        <title>Today's Specials | Aura Premium Cafe & Restaurant</title>
        <meta name="description" content="Explore today's exclusive special creations at Aura, including A5 Wagyu Beef Pizza, Lobster Thermidor Slices, and Premium Caviar & Burrata." />
        <body className="subpage" />
      </Helmet>
      <div className="relative z-0 min-h-screen text-white">
        <div 
          className="fixed inset-0 -z-10 bg-black/60 bg-blend-overlay"
          style={{ 
            backgroundImage: 'url(/bg_fries.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif font-bold mb-12 text-primary text-center"
          >
            Today's Specials
          </motion.h1>
          <div className="space-y-12">
            {specials.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                onClick={() => setSelectedSpecial(item as SpecialDish)}
                className="bg-black/40 backdrop-blur-md border border-primary/20 p-8 rounded-lg hover:border-primary/50 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-3xl font-serif text-white">{item.name}</h3>
                  <span className="text-2xl text-primary font-serif">{item.price}</span>
                </div>
                <p className="text-xl text-white/70 font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Special Dish Details Modal */}
        <AnimatePresence>
          {selectedSpecial && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedSpecial(null)}
            >
              <motion.div 
                initial={{ scale: 0.9, y: 50, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 50, opacity: 0 }}
                className="bg-[#111] border border-primary/30 p-8 md:p-12 rounded-2xl max-w-lg w-full shadow-2xl relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button 
                  onClick={() => setSelectedSpecial(null)}
                  className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors text-2xl"
                >
                  &times;
                </button>
                <h3 className="text-3xl font-serif text-primary mb-2">{selectedSpecial.name}</h3>
                <p className="text-2xl font-serif text-white mb-6">{selectedSpecial.price}</p>
                
                <div className="mb-8">
                  <p className="text-white/80 italic mb-6">"{selectedSpecial.desc}"</p>
                  <h4 className="text-sm uppercase tracking-[0.2em] text-white/40 mb-4 border-b border-white/10 pb-2">Premium Ingredients</h4>
                  <ul className="space-y-2">
                    {selectedSpecial.ingredients.map((ing, idx) => (
                      <li key={idx} className="text-white/90 flex items-center before:content-['✦'] before:text-primary before:mr-3">
                        {ing}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  onClick={() => setSelectedSpecial(null)}
                  className="w-full py-4 bg-primary text-black font-bold uppercase tracking-widest rounded-full hover:bg-primary/90 transition-colors"
                >
                  Reserve Special
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </PageTransition>
  )
}
