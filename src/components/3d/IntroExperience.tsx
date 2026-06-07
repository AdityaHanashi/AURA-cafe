import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface IntroProps {
  onComplete: () => void;
}

export default function IntroExperience({ onComplete }: IntroProps) {
  const [phase, setPhase] = useState<'initial' | 'toppings' | 'cheese_fall' | 'complete'>('initial')

  useEffect(() => {
    // Timing sequence: Toppings fall, then cheese covers screen, then done.
    const t0 = setTimeout(() => setPhase('toppings'), 500)
    const t1 = setTimeout(() => setPhase('cheese_fall'), 3000)
    const t2 = setTimeout(() => {
      setPhase('complete')
      setTimeout(onComplete, 1500)
    }, 4500)

    return () => {
      clearTimeout(t0); clearTimeout(t1); clearTimeout(t2);
    }
  }, [onComplete])

  // Generate random toppings (pepperonis, basil leaves)
  const toppings = Array.from({ length: 20 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100, // percentage
    delay: Math.random() * 1.5,
    size: Math.random() * 20 + 20,
    rotate: Math.random() * 360,
    isLeaf: Math.random() > 0.7
  }))

  return (
    <motion.div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center z-50">
      {/* Falling Toppings */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {toppings.map(t => (
          <motion.div
            key={t.id}
            className={`absolute rounded-full ${t.isLeaf ? 'bg-green-700/80 rounded-tl-full rounded-br-full' : 'bg-[#a3221b] border-2 border-[#80130d]'} drop-shadow-xl`}
            style={{ 
              width: t.size, 
              height: t.isLeaf ? t.size * 0.6 : t.size,
              left: `${t.x}%`,
              top: '-10%'
            }}
            initial={{ y: 0, rotate: t.rotate, opacity: 0 }}
            animate={{ 
              y: phase !== 'initial' ? window.innerHeight + 100 : 0,
              rotate: t.rotate + 360,
              opacity: phase !== 'initial' && phase !== 'cheese_fall' && phase !== 'complete' ? 1 : 0
            }}
            transition={{ duration: 2, delay: t.delay, ease: "easeIn" }}
          />
        ))}
      </div>

      {/* The 3D Pizza Container */}
      <div 
        className="relative w-full max-w-[800px] aspect-square flex items-center justify-center z-20"
        style={{ perspective: '1500px' }}
      >
        <motion.div 
          className="relative w-full h-full flex items-center justify-center"
          initial={{ rotateX: 50, scale: 1.5, y: 100 }}
          animate={{ 
            rotateX: phase === 'cheese_fall' ? 30 : 50,
            scale: phase === 'cheese_fall' ? 1.8 : 1.5,
            y: phase === 'cheese_fall' ? 50 : 100,
          }}
          transition={{ duration: 3, ease: "easeOut" }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Main Pizza Body */}
          <motion.div 
            className="absolute w-[80%] h-[80%] rounded-full overflow-hidden drop-shadow-2xl"
          >
            <div 
              className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{
                backgroundImage: 'url(/pizza.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Screen-filling Cheese Transition that drops from the top */}
      <AnimatePresence>
        {phase === 'cheese_fall' && (
          <motion.div 
            initial={{ y: '-100%', borderRadius: '0 0 50% 50%' }}
            animate={{ y: 0, borderRadius: '0%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
            className="absolute inset-0 z-30 shadow-[0_20px_50px_rgba(255,184,77,0.5)]" 
            style={{
              backgroundImage: 'url(/cheese.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'bottom'
            }}
          />
        )}
      </AnimatePresence>

      {/* Final Fade out transition to reveal the main site */}
      <AnimatePresence>
         {phase === 'complete' && (
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="absolute inset-0 z-40 bg-black" 
          />
        )}
      </AnimatePresence>
    </motion.div>
  )
}
