import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import PageTransition from '../components/layout/PageTransition'
import Footer from '../components/layout/Footer'
import { motion } from 'framer-motion'

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>
      <Helmet>
        <title>Contact Us | Aura Premium Cafe & Restaurant</title>
        <meta name="description" content="Get in touch with Aura Premium Cafe & Restaurant. Locate our venue, check operating hours, or send us a message directly online." />
      </Helmet>
      <div className="relative min-h-screen text-white">
        <div 
          className="fixed inset-0 -z-10 bg-black/60 bg-blend-overlay"
          style={{ 
            backgroundImage: 'url(/bg_cake.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-6 max-w-2xl text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif font-bold mb-8 text-primary"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl mb-12 opacity-80"
          >
            We'd love to hear from you.
          </motion.p>
          
          <motion.form 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6 text-left"
          >
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-white/60">Name</label>
              <input type="text" className="w-full bg-white/5 border border-white/20 p-4 rounded text-white focus:border-primary outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-white/60">Email</label>
              <input type="email" className="w-full bg-white/5 border border-white/20 p-4 rounded text-white focus:border-primary outline-none transition" />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2 uppercase tracking-wider text-white/60">Message</label>
              <textarea rows={5} className="w-full bg-white/5 border border-white/20 p-4 rounded text-white focus:border-primary outline-none transition"></textarea>
            </div>
            <button type="button" className="w-full bg-primary text-black font-bold uppercase tracking-widest py-4 rounded hover:bg-primary/90 transition">
              Send Message
            </button>
          </motion.form>
        </div>
        <Footer />
      </div>
    </PageTransition>
  )
}
