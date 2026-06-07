import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import IntroExperience from '../components/3d/IntroExperience'
import Navbar from '../components/layout/Navbar'
import Hero from '../components/sections/Hero'
import FeaturedSection from '../components/sections/FeaturedSection'
import ChefSection from '../components/sections/ChefSection'
import PageTransition from '../components/layout/PageTransition'

export default function Home() {
  const [showIntro, setShowIntro] = useState(true)

  useEffect(() => {
    // Check if intro has already been shown in this session
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro')
    if (hasSeenIntro) {
      setShowIntro(false)
    }
  }, [])

  const handleIntroComplete = () => {
    setShowIntro(false)
    sessionStorage.setItem('hasSeenIntro', 'true')
    window.scrollTo(0, 0)
  }

  if (showIntro) {
    return (
      <PageTransition>
        <Helmet>
          <title>Aura | Premium Cafe & Restaurant</title>
        </Helmet>
        <IntroExperience onComplete={handleIntroComplete} />
      </PageTransition>
    )
  }

  return (
    <PageTransition>
      <Helmet>
        <title>Premium Cafe & Restaurant | Aura</title>
        <meta name="description" content="Experience the finest culinary creations in our premium cafe and restaurant." />
      </Helmet>
      
      <div className="bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <FeaturedSection />
          <ChefSection />
        </main>
      </div>
    </PageTransition>
  )
}
