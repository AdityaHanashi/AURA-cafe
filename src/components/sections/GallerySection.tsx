import React from 'react'
import { motion } from 'framer-motion'

export default function GallerySection() {
  const images = [
    { src: '/gallery_1.png?v=1', alt: 'Elegant Dining' },
    { src: '/gallery_2.png?v=1', alt: 'Artisan Coffee' },
    { src: '/gallery_3.png?v=1', alt: 'Gourmet Plating' },
    { src: '/gallery_4.png?v=1', alt: 'Signature Cocktails' },
    { src: '/gallery_5.png?v=1', alt: 'Culinary Mastery' },
    { src: '/gallery_6.png?v=1', alt: 'Evening Ambiance' },
  ]

  return (
    <section id="gallery" className="py-24 bg-black relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary uppercase tracking-[0.3em] font-bold text-sm mb-4"
          >
            The Experience
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg"
          >
            A Glimpse of Aura
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Immerse yourself in an atmosphere of refined luxury where every detail is meticulously crafted for your enjoyment.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer border border-white/10 shadow-2xl"
            >
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={img.src} 
                alt={img.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
