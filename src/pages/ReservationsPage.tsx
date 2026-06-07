import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/layout/Navbar'
import PageTransition from '../components/layout/PageTransition'

export default function ReservationsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <PageTransition>
      <Helmet>
        <title>Reservations | Premium Cafe & Restaurant</title>
      </Helmet>
      <div 
        className="min-h-screen bg-black/60 bg-blend-overlay"
        style={{ backgroundImage: 'url(/bg_juice.png)', backgroundSize: 'cover', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}
      >
        <Navbar />
        <div className="pt-32 pb-20 container mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 text-primary">Reserve a Table</h2>
          <p className="text-xl mb-12 opacity-80">Book your premium dining experience.</p>
          <form className="max-w-xl mx-auto space-y-6">
            <div className="grid grid-cols-2 gap-6">
              <input type="date" className="w-full bg-white/5 border border-white/20 p-4 rounded text-white" />
              <input type="time" className="w-full bg-white/5 border border-white/20 p-4 rounded text-white" />
            </div>
            <select className="w-full bg-[#111] border border-white/20 p-4 rounded text-white">
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
