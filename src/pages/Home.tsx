import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import IntroExperience from '../components/3d/IntroExperience'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import FeaturedSection from '../components/sections/FeaturedSection'
import ChefSection from '../components/sections/ChefSection'
import PageTransition from '../components/layout/PageTransition'

import GallerySection from '../components/sections/GallerySection'
import Footer from '../components/layout/Footer'

export default function Home() {
  const [showIntro, setShowIntro] = useState(() => !sessionStorage.getItem('hasSeenIntro'))

  useEffect(() => {
    // Session storage check is now handled synchronously in useState initializer
  }, [])

  useEffect(() => {
    // Scroll to hash automatically when returning from other pages
    if (!showIntro && window.location.hash) {
      const id = window.location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  }, [showIntro])

  const handleIntroComplete = () => {
    setShowIntro(false)
    sessionStorage.setItem('hasSeenIntro', 'true')
  }

  return (
    <>
      <Helmet>
        <title>Premium Cafe & Restaurant | Aura</title>
        <meta name="description" content="Experience the finest culinary creations in our premium cafe and restaurant." />
      </Helmet>
      
      {/* Intro Overlay - Mounts immediately without fade-in */}
      <AnimatePresence>
        {showIntro && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-black overflow-hidden flex items-center justify-center"
            exit={{ opacity: 0, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <IntroExperience onComplete={handleIntroComplete} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content (Always Mounted) */}
      <PageTransition>
        <div className="bg-background min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Hero playAnimation={!showIntro} />
            <FeaturedSection />
            <ChefSection />
            <GallerySection />
          </main>
          <Footer />
        </div>
      </PageTransition>
    </>
  )
}
