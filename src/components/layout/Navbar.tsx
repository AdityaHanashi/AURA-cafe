import React, { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Link } from 'react-router-dom'
import MagneticButton from '../ui/MagneticButton'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'Specials', href: '/specials' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Reservations', href: '/reservations' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact Us', href: '/contact' },
]

export default function Navbar() {
  const [hidden, setHidden] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0
    if (latest > previous && latest > 150) {
      setHidden(true)
    } else {
      setHidden(false)
    }
    setIsScrolled(latest > 50)
  })

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className={`fixed top-0 inset-x-0 z-40 w-full transition-all duration-300 ${
          isScrolled ? "bg-background/80 backdrop-blur-md border-b border-white/10 py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          <div className="flex items-center space-x-12">
            {/* Real Aura Effect Logo */}
            <Link to="/" className="relative flex items-center group">
              <motion.span 
                className="text-3xl font-serif font-extrabold tracking-widest uppercase text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"
              >
                AURA
              </motion.span>
              <motion.span 
                className="absolute inset-0 text-primary blur-[12px] opacity-60"
                animate={{ opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                AURA
              </motion.span>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-sm uppercase tracking-[0.2em] font-medium text-white hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex">
            <Link 
              to="/menu"
              className="px-6 py-3 bg-primary/10 border border-primary text-primary rounded-full text-xs uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,184,77,0.3)]"
            >
              Order to Dine In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="flex flex-col space-y-1.5">
              <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-30 bg-background flex flex-col items-center justify-center transition-transform duration-500 ease-in-out ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col items-center space-y-8 mt-16">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-3xl font-serif text-white hover:text-primary transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-8">
            <Link 
              to="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="px-8 py-4 bg-primary/10 border border-primary text-primary rounded-full text-sm uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(255,184,77,0.4)]"
            >
              Order to Dine In
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
