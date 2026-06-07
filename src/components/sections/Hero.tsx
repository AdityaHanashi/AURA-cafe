import React, { useRef, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MagneticButton from '../ui/MagneticButton'
import { Link } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 1000], [0, 300])
  const opacity = useTransform(scrollY, [0, 500], [1, 0])

  useEffect(() => {
    gsap.fromTo('.hero-fade-in', 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out', delay: 1.5 }
    )
  }, [])

  const headingText = "Where Great Food Meets".split(" ")

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden flex items-center bg-black">
      {/* Background Image with Parallax */}
      <motion.div 
        style={{ y, opacity }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background z-10" />
        <img 
          src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop" 
          alt="Premium Cafe Interior" 
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center mt-20">
        <p className="hero-fade-in text-primary uppercase tracking-[0.3em] font-medium mb-6">
          A Symphony of Taste
        </p>
        
        <motion.h1 
          className="text-6xl sm:text-7xl md:text-9xl font-serif font-bold text-white tracking-tight leading-none mb-8 flex flex-wrap justify-center gap-x-4 gap-y-2"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 1 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.5 }
            }
          }}
        >
          {headingText.map((word, index) => (
            <span key={index} className="overflow-hidden inline-block pb-2">
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { y: "100%" },
                  visible: { y: "0%", transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </motion.h1>
        
        <p className="hero-fade-in text-lg md:text-xl text-white/80 max-w-2xl font-light mb-12">
          Experience culinary excellence in an atmosphere of refined luxury. Every dish tells a story, every sip is a journey.
        </p>
        
        <div className="hero-fade-in flex flex-col sm:flex-row items-center gap-6">
          <Link to="/reservations">
            <MagneticButton variant="primary">
              Reserve Table
            </MagneticButton>
          </Link>
          <Link to="/menu">
            <MagneticButton variant="outline" className="text-white border-white/30 hover:bg-white/10">
              Explore Menu
            </MagneticButton>
          </Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-white/50 text-xs uppercase tracking-widest mb-4">Scroll</span>
        <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-full h-1/2 bg-primary absolute top-0"
          />
        </div>
      </motion.div>
    </section>
  )
}
