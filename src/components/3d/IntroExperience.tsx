import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface IntroProps {
  onComplete: () => void;
}

export default function IntroExperience({ onComplete }: IntroProps) {
  const [phase, setPhase] = useState<'initial' | 'toppings' | 'complete'>('initial')

  useEffect(() => {
    // Timing sequence: Toppings fall, then pizza zooms in and finishes.
    const t0 = setTimeout(() => setPhase('toppings'), 500)
    const t1 = setTimeout(() => {
      setPhase('complete')
      setTimeout(onComplete, 1000)
    }, 2500)

    return () => {
      clearTimeout(t0); clearTimeout(t1);
    }
  }, [onComplete])

  // Generate random toppings once to prevent re-renders
  const toppings = React.useMemo(() => {
    // Reduce toppings on mobile for performance
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const count = isMobile ? 8 : 20;
    
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      delay: Math.random() * 1.5,
      size: Math.random() * 20 + 20,
      rotate: Math.random() * 360,
      isLeaf: Math.random() > 0.7
    }))
  }, [])

  return (
    <motion.div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center z-50">
      {/* Falling Toppings */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {toppings.map(t => (
          <motion.div
            key={t.id}
            className={`absolute rounded-full ${t.isLeaf ? 'bg-green-700/80 rounded-tl-full rounded-br-full' : 'bg-[#a3221b] border-2 border-[#80130d]'}`}
            style={{ 
              width: t.size, 
              height: t.isLeaf ? t.size * 0.6 : t.size,
              left: `${t.x}%`,
              top: '-10%',
              willChange: "transform, opacity"
            }}
            initial={{ y: 0, rotate: t.rotate, opacity: 0 }}
            animate={{ 
              y: phase !== 'initial' ? '110vh' : 0,
              rotate: t.rotate + 360,
              opacity: phase === 'initial' ? 0 : phase === 'complete' ? 0 : 1
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
          initial={{ rotateX: 60, scale: 0.1, y: -600 }}
          animate={{ 
            rotateX: phase === 'complete' ? 10 : 30,
            scale: phase === 'complete' ? 5 : 1.2,
            y: phase === 'complete' ? 200 : 0,
            opacity: phase === 'complete' ? 0 : 1
          }}
          transition={{ duration: phase === 'complete' ? 1 : 1.8, ease: "easeOut" }}
          style={{ transformStyle: 'preserve-3d', willChange: "transform, opacity" }}
        >
          {/* Main Pizza Body */}
          <motion.div 
            className="absolute w-[80%] h-[80%] rounded-full overflow-hidden shadow-2xl"
            style={{ willChange: "transform, opacity" }}
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
    </motion.div>
  )
}
