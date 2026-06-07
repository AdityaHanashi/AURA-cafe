import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import PageTransition from '../components/layout/PageTransition'
import { motion } from 'framer-motion'

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>
      <Helmet>
        <title>About Us | Premium Cafe & Restaurant</title>
      </Helmet>
      <div 
        className="min-h-screen bg-black/60 bg-blend-overlay text-white"
        style={{ backgroundImage: 'url(/bg_cake.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}
      >
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-6 max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif font-bold mb-12 text-primary"
          >
            Our Story
          </motion.h1>
          <div className="space-y-8 text-lg md:text-xl leading-relaxed text-white/80">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Founded in the heart of the city, our premium cafe and restaurant has been a beacon of culinary excellence. We blend traditional techniques with modern gastronomy to create unforgettable dining experiences.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Every ingredient is carefully sourced, every dish is meticulously crafted, and every detail is designed to wow our guests. Welcome to a new era of taste.
            </motion.p>
          </div>

          {/* Feedback Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="mt-24 bg-white/5 border border-white/10 p-8 rounded-xl"
          >
            <h3 className="text-2xl font-serif mb-6 text-primary">Send Feedback</h3>
            <p className="text-white/60 mb-6">We'd love to hear about your experience.</p>
            <form className="space-y-4">
              <textarea 
                rows={4} 
                className="w-full bg-black/50 border border-white/20 p-4 rounded text-white focus:border-primary outline-none transition resize-none"
                placeholder="Tell us what you think..."
              />
              <button 
                type="button" 
                className="bg-primary text-black font-bold uppercase tracking-widest py-3 px-8 rounded hover:bg-primary/90 transition"
              >
                Send
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  )
}
