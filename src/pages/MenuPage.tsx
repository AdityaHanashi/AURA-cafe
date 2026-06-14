import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import MenuSection from '../components/sections/MenuSection'
import PageTransition from '../components/layout/PageTransition'

export default function MenuPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>
      <Helmet>
        <title>Our Menu | Aura Premium Cafe & Restaurant</title>
        <meta name="description" content="Discover Aura's menu including our Artisan Pizzas, Signature Pour-over Coffees, specialty drinks, and mouth-watering desserts." />
      </Helmet>
      <div className="relative min-h-screen text-white">
        <div 
          className="fixed inset-0 -z-10 bg-black/80 bg-blend-overlay"
          style={{ 
            backgroundImage: 'url(/bg_burger.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
        <Navbar />
        <div className="pt-32 pb-20">
          <MenuSection />
        </div>
      </div>
    </PageTransition>
  )
}
