import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-serif font-bold text-primary mb-6">AURA</h3>
            <p className="text-white/60 mb-6 font-light">
              Experience the pinnacle of culinary artistry and luxurious ambiance at Aura. Where great food meets perfect moments.
            </p>
          </div>
          
          <div>
            <h4 className="text-xl font-medium mb-6">Location</h4>
            <address className="not-italic text-white/60 font-light leading-relaxed">
              Premium Cafe & Restaurant<br />
              Vidyanagar Main Road,<br />
              Hubli Dharwad, Karnataka 580021<br />
              India
            </address>
          </div>
          
          <div>
            <h4 className="text-xl font-medium mb-6">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                IN
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300">
                TW
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-white/40">
          <p>&copy; 2026 Aura Cafe. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link to="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
