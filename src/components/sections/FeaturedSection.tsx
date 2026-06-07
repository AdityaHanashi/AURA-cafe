import React from 'react'
import { motion } from 'framer-motion'

export default function FeaturedSection() {
  const cards = [
    { title: "Master Burger", subtitle: "Specialty Meal", price: "₹650", img: "/bg_burger.png" },
    { title: "Classic Pizza", subtitle: "Wood-fired", price: "₹850", img: "/pizza.png" },
    { title: "Golden Fries", subtitle: "Crispy perfection", price: "₹300", img: "/bg_fries.png" }
  ]

  return (
    <section className="relative bg-[#f7eedc] text-black pb-24 pt-32">
      {/* Torn paper top edge effect */}
      <div 
        className="absolute top-[-30px] left-0 w-full h-[60px] z-20"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1200 120\' preserveAspectRatio=\'none\'%3E%3Cpath d=\'M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z\' opacity=\'.25\' fill=\'%23f7eedc\'/%3E%3Cpath d=\'M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z\' opacity=\'.5\' fill=\'%23f7eedc\'/%3E%3Cpath d=\'M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z\' fill=\'%23f7eedc\'/%3E%3C/svg%3E")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      <div className="container mx-auto px-6 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-primary font-bold tracking-widest uppercase text-sm mb-2 block">Our Specials</span>
          <h2 className="text-4xl md:text-6xl font-extrabold font-serif text-[#3e2723]">Fresh, Hot &<br/>Made to Love!</h2>
          <p className="mt-4 text-[#5d4037] max-w-2xl mx-auto">
            Experience our most loved dishes, prepared fresh every day with the finest ingredients and a touch of magic.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {cards.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05, y: -10 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 20 }}
              className="bg-white rounded-3xl p-6 shadow-xl relative mt-16 flex flex-col items-center group cursor-pointer"
            >
              {/* Image breaks out of the card top */}
              <motion.div 
                className="absolute -top-20 w-40 h-40 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 group-hover:rotate-3"
              >
                <img src={card.img} alt={card.title} className="w-full h-full object-contain drop-shadow-2xl" />
              </motion.div>
              
              <div className="mt-24 text-center w-full">
                <h3 className="text-2xl font-bold text-[#3e2723] mb-1 group-hover:text-primary transition-colors">{card.title}</h3>
                <p className="text-gray-500 text-sm mb-6">{card.subtitle}</p>
                <div className="flex justify-between items-center border-t border-dashed border-gray-300 pt-4 mt-auto">
                  <button className="bg-primary text-white px-4 py-2 rounded-full text-sm font-bold hover:scale-105 transition-transform shadow-lg hover:shadow-primary/50">
                    Order Now
                  </button>
                  <span className="font-bold text-xl text-[#3e2723]">{card.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
