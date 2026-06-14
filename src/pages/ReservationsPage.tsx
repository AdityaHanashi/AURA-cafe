import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import PageTransition from '../components/layout/PageTransition'

export default function ReservationsPage() {
  const [dateType, setDateType] = useState<'text' | 'date'>('text')
  const [timeType, setTimeType] = useState<'text' | 'time'>('text')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>
      <Helmet>
        <title>Reserve a Table | Aura Premium Cafe & Restaurant</title>
        <meta name="description" content="Book your premium dining table online at Aura Cafe & Restaurant. Choose your preferred date, time, and guest count for a fine dining experience." />
      </Helmet>
      <div className="relative min-h-screen text-white">
        <div 
          className="fixed inset-0 -z-10 bg-black/60 bg-blend-overlay"
          style={{ 
            backgroundImage: 'url(/bg_juice.png)', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center',
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-primary">Reserve a Table</h1>
          <p className="text-xl mb-12 opacity-80">Book your premium dining experience.</p>
          <form className="max-w-xl mx-auto space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input 
                type={dateType} 
                placeholder="Choose Date"
                onFocus={() => setDateType('date')}
                onBlur={(e) => {
                  if (!e.target.value) setDateType('text')
                }}
                style={{ colorScheme: 'dark' }}
                className="w-full bg-white/5 border border-white/20 p-4 rounded text-white placeholder-white/50 focus:outline-none focus:border-primary transition" 
              />
              <input 
                type={timeType} 
                placeholder="Choose Time"
                onFocus={() => setTimeType('time')}
                onBlur={(e) => {
                  if (!e.target.value) setTimeType('text')
                }}
                style={{ colorScheme: 'dark' }}
                className="w-full bg-white/5 border border-white/20 p-4 rounded text-white placeholder-white/50 focus:outline-none focus:border-primary transition" 
              />
            </div>
            <select className="w-full bg-[#111] border border-white/20 p-4 rounded text-white focus:outline-none focus:border-primary transition">
              <option>1 Guest</option>
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4+ Guests</option>
            </select>
            <button type="button" className="w-full bg-primary text-black font-bold uppercase tracking-widest py-4 rounded hover:bg-primary/90 transition">
              Confirm Reservation
            </button>
          </form>
        </div>
      </div>
    </PageTransition>
  )
}
